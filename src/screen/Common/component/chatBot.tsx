import React, { useState, useEffect, useRef } from 'react';
import { Modal, Box, Typography, TextField, IconButton, Paper, Fade, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';
import { orderDetails } from '../../../DataBase/orderDetails';

interface Message {
  text: string;
  sender: 'user' | 'bot';
  showYesNo?: boolean;
}

interface Props {
  open: boolean;
  onClose: () => void;
}

const Chatbot: React.FC<Props> = ({ open, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [currentOptions, setCurrentOptions] = useState<string[]>([
    'Order Status',
    'Product Details',
    'Return Policy',
    'Shipping Information',
    'Offers and Discounts',
  ]);

  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  const predefinedResponses: { [key: string]: { response: string; options: string[] } } = {
    'Orders': {
      response: 'You can track your order status here. Do you need help with something else?',
      options: ['Track Order', 'Cancel Order', 'Order History'],
    },
    'Product Details': {
      response: 'Please provide the product name or ID for more details. Do you need help with something else?',
      options: ['Product Availability', 'Product Specifications', 'Product Reviews'],
    },
    'Return Policy': {
      response: 'You can read our return policy here. Do you need help with something else?',
      options: ['Return Process', 'Refund Status', 'Exchange Policy'],
    },
    'Shipping Information': {
      response: 'You can find shipping information here. Do you need help with something else?',
      options: ['Shipping Rates', 'Delivery Time', 'International Shipping'],
    },
    'Offers and Discounts': {
      response: 'Check out our latest offers and discounts. Do you need help with something else?',
      options: ['Current Offers', 'Upcoming Sales', 'Coupon Codes'],
    },
  };

  const greetingResponses: { [key: string]: string } = {
    hi: 'Hello! How can I assist you today?',
    hello: 'Hi there! How can I help you?',
    hey: 'Hey! What can I do for you?',
    thank: 'You’re welcome! Is there anything else I can help with?',
    thanks: 'You’re welcome! Is there anything else I can help with?',
    welcome: 'Thank you! How can I assist you today?',
    goodmorning: 'Good morning! How can I make your day better?',
    goodafternoon: 'Good afternoon! How can I help you today?',
    goodevening: 'Good evening! What can I do for you?',
    weather: 'Fetching the current weather for your location...',
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSend = (message: string, isUser: boolean) => {
    if (message.trim()) {
      const newMessage = { text: message, sender: isUser ? 'user' : 'bot' } as Message;
      setMessages(prevMessages => [...prevMessages, newMessage]);
      setInput('');
  
      if (isUser) {
        setTimeout(() => {
          let botResponse = 'I did not understand that. Can you try again?';
          let newOptions: string[] = [];
          let showYesNo = false;
  
          const lowerCaseMessage = message.toLowerCase();
          if (greetingResponses[lowerCaseMessage]) {
            botResponse = greetingResponses[lowerCaseMessage];
            if (lowerCaseMessage === 'weather') {
              fetchWeather();
            }
          } else if (predefinedResponses[message]) {
            botResponse = predefinedResponses[message].response;
            newOptions = predefinedResponses[message].options;
            showYesNo = true;
          } else if (message === 'Order Status') {
            const randomOrderDetail = getRandomOrderDetail(); // Function to get random order detail
            botResponse = `Here's a random order detail: ${randomOrderDetail}. Do you need help with something else?`;
            newOptions = ['Track Order', 'Cancel Order', 'Order History']; // Update options if needed
            showYesNo = true;
          }
  
          const botMessage = {
            text: botResponse,
            sender: 'bot',
            showYesNo: showYesNo,
          } as Message;
  
          setMessages(prevMessages => [...prevMessages, botMessage]);
          setCurrentOptions(newOptions);
        }, 1000);
      }
    }
  };
  
  const getRandomOrderDetail = () => {
    const randomIndex = Math.floor(Math.random() * orderDetails.length);
    const orderDetail = orderDetails[randomIndex];
  
    // Construct a formatted string with order details
    const formattedDetail = `
      Order ID: ${orderDetail.orderId}
      Status: ${orderDetail.status}
      Items: 
        ${orderDetail.items.map(item => `${item.quantity} x ${item.name}`).join('\n      ')}
      Shipping Method: ${orderDetail.shippingMethod}
      Estimated Delivery: ${orderDetail.estimatedDelivery}
      Customer: ${orderDetail.customerName} (${orderDetail.customerEmail})
      Shipping Address: 
        ${orderDetail.shippingAddress.street}
        ${orderDetail.shippingAddress.city}, ${orderDetail.shippingAddress.state} ${orderDetail.shippingAddress.zip}
        ${orderDetail.shippingAddress.country}
    `;
  
    return formattedDetail;
  };
  

  const fetchWeather = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          console.log(`Geolocation success: Latitude: ${latitude}, Longitude: ${longitude}`);
          
          fetch(`https://wttr.in/${latitude},${longitude}?format=%C+%t`)
            .then(response => response.text())
            .then(weatherText => {
              console.log('Weather data:', weatherText);
  
              const weatherMessage = `The current weather is ${weatherText}.`;
  
              const weatherMessageObj = {
                text: weatherMessage,
                sender: 'bot',
              } as Message;
  
              setMessages(prevMessages => [...prevMessages, weatherMessageObj]);
            })
            .catch(error => {
              console.error('Error fetching weather data:', error);
  
              const errorMessageObj = {
                text: 'Sorry, I was unable to fetch the weather data.',
                sender: 'bot',
              } as Message;
  
              setMessages(prevMessages => [...prevMessages, errorMessageObj]);
            });
        },
        error => {
          console.error('Geolocation error:', error);
          
          let errorMessage = 'Sorry, I was unable to get your location.';
          switch (error.code) {
            case error.PERMISSION_DENIED:
              errorMessage = 'User denied the request for Geolocation.';
              break;
            case error.POSITION_UNAVAILABLE:
              errorMessage = 'Location information is unavailable.';
              break;
            case error.TIMEOUT:
              errorMessage = 'The request to get user location timed out.';
              break;
            default:
              errorMessage = 'An unknown error occurred.';
              break;
          }
  
          const errorMessageObj = {
            text: errorMessage,
            sender: 'bot',
          } as Message;
  
          setMessages(prevMessages => [...prevMessages, errorMessageObj]);
        }
      );
    } else {
      console.error('Geolocation not supported.');
  
      const errorMessageObj = {
        text: 'Geolocation is not supported by this browser.',
        sender: 'bot',
      } as Message;
  
      setMessages(prevMessages => [...prevMessages, errorMessageObj]);
    }
  };
  

  const handleOptionClick = (option: string) => {
    handleSend(option, true);
  };

  const handleYesNoClick = (answer: string) => {
    if (answer === 'Yes') {
      setCurrentOptions([
        'Order Status',
        'Product Details',
        'Return Policy',
        'Shipping Information',
        'Offers and Discounts',
      ]);
    } else {
      setCurrentOptions([]);
    }
    setMessages(prevMessages =>
      prevMessages.map((msg, index) =>
        index === prevMessages.length - 1 ? { ...msg, showYesNo: false } : msg
      )
    );
  };

  return (
    <Modal open={open} onClose={onClose} closeAfterTransition>
      <Fade in={open}>
        <Paper
          sx={{
            position: 'absolute',
            bottom: 16,
            right: 16,
            width: 350,
            height: 600,
            backgroundColor: '#fff',
            border: '1px solid #ddd',
            boxShadow: 24,
            borderRadius: 3,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Box display="flex" justifyContent="space-between" alignItems="center" p={2} sx={{ borderBottom: '1px solid #ddd' }}>
            <Typography variant="h6" sx={{ color: '#ff8c00', fontWeight: 'bold' }}>Scripbox Assistant</Typography>
            <IconButton size="small" onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box sx={{ flexGrow: 1, overflowY: 'auto', padding: 2 }}>
            {messages.map((msg, index) => (
              <Box key={index} sx={{ textAlign: msg.sender === 'user' ? 'right' : 'left', mb: 1 }}>
                <Typography
                  sx={{
                    display: 'inline-block',
                    backgroundColor: msg.sender === 'user' ? '#cfe8fc' : '#e0e0e0',
                    color: '#000',
                    padding: 1,
                    borderRadius: 2,
                    maxWidth: '80%',
                  }}
                >
                  {msg.text}
                </Typography>
              </Box>
            ))}
            <div ref={messagesEndRef} />
          </Box>
          <Box p={2} display="flex" flexDirection="column">
            {currentOptions.map(option => (
              <Button
                key={option}
                onClick={() => handleOptionClick(option)}
                sx={{ mb: 1, textTransform: 'none', justifyContent: 'flex-start' }}
                variant="outlined"
              >
                {option}
              </Button>
            ))}
            {messages[messages.length - 1]?.showYesNo && (
              <Box>
                <Button
                  onClick={() => handleYesNoClick('Yes')}
                  sx={{ mr: 1, textTransform: 'none' }}
                  variant="contained"
                  color="primary"
                >
                  Yes
                </Button>
                <Button
                  onClick={() => handleYesNoClick('No')}
                  sx={{ textTransform: 'none' }}
                  variant="contained"
                  color="secondary"
                >
                  No
                </Button>
              </Box>
            )}
            <Box display="flex" mt={2}>
              <TextField
                variant="outlined"
                placeholder="Type a message"
                fullWidth
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyPress={e => {
                  if (e.key === 'Enter') {
                    handleSend(input, true);
                  }
                }}
              />
              <IconButton onClick={() => handleSend(input, true)}>
                <SendIcon color="primary" />
              </IconButton>
            </Box>
          </Box>
        </Paper>
      </Fade>
    </Modal>
  );
};

export default Chatbot;
