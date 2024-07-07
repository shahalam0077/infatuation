import { Input } from '@mui/base/Input';
import { Fade, Slide, SlideProps, Snackbar, SnackbarOrigin, TextField } from '@mui/material';
import  Button  from '@mui/material/Button';
import { TransitionProps } from '@mui/material/transitions';
import React from 'react';
import PositionedSnackbar from '../../Common/component/snackbar';
import '../css/footer.css'

function SlideTransition(props: SlideProps) {
  return <Slide {...props} direction="up" />;
}

interface State extends SnackbarOrigin {
  open: boolean;
}

const SecondarySectionFour = () => {

  const [state, setState] = React.useState<{
    open: boolean;
    Transition: React.ComponentType<
      TransitionProps & {
        children: React.ReactElement<any, any>;
      }
    >;
  }>({
    open: false,
    Transition: Fade,
  });

  const handleClick =
    (
      Transition: React.ComponentType<
        TransitionProps & {
          children: React.ReactElement<any, any>;
        }
      >,
    ) =>
    () => {
      setState({
        open: true,
        Transition,
      });
    };

  const handleClose = () => {
    setState({
      ...state,
      open: false,
    });
  };

  
  return (
    <div style={{width:'30%'}}>
      <div className='footer-title'>Subscribe</div>
      <Input aria-placeholder='Email address...' placeholder='Email address...' id="outlined-size-small"/>
      <Button onClick={handleClick(SlideTransition)} variant="contained" size="medium">SUBSCRIBE</Button>
      <Snackbar
      style={{backgroundColor:'#ccc',color:'white'}}
        open={state.open}
        onClose={handleClose}
        TransitionComponent={state.Transition}
        message="Email has been send. Thank you!"
        key={state.Transition.name}
        autoHideDuration={1500}
      />
    </div>
  )
}

export default SecondarySectionFour;