import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import Button from "@mui/material/Button";

const Separator = styled("div")(
  ({ theme }) => `
  height: ${theme.spacing(3)};
`
);

const MAX = 100;
const MIN = 15;
const marks = [
  {
    value: MIN,
    label: "",
  },
  {
    value: MAX,
    label: "",
  },
];
const xmarks = [
  {
    value: 15,
    label: "$15",
  },
  {
    value: 25,
    label: "$25",
  },
  {
    value: 35,
    label: "$35°C",
  },
  {
    value: 35,
    label: "$35",
  },
  {
    value: 45,
    label: "$45",
  },
  {
    value: 55,
    label: "$55",
  },
  {
    value: 65,
    label: "$65",
  },
  {
    value: 75,
    label: "$75",
  },
  {
    value: 85,
    label: "$85",
  },
  {
    value: 95,
    label: "$95",
  },
  {
    value: 100,
    label: "$100",
  },
];

function valuetext(value: number) {
  return `${value}`;
}

export default function TrackInvertedSlider() {
  const [val, setVal] = React.useState<number>(MIN);
  const handleChange = (_: Event, newValue: number | number[]) => {
    setVal(newValue as number);
  };
  return (
    <Box sx={{ width: "100%",marginBottom:'4rem' }}>
      <Separator />
      <Typography id="track-inverted-range-slider" gutterBottom>
        Filter by Price
      </Typography>
      <Slider
        marks={marks}
        track="inverted"
        step={10}
        value={val}
        valueLabelDisplay="auto"
        min={MIN}
        max={MAX}
        onChange={handleChange}
        aria-labelledby="track-inverted-range-slider"
        defaultValue={[15, 100]}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignSelf: "flex-end",
          justifyContent: "space-between",
          alignItems:'center'
        }}
      >
        <Button size="small" variant="contained">
          Filter
        </Button>
        <Box
          sx={{
            width: "50%",
            display: "flex",
            flexDirection: "row",
            alignSelf: "flex-end",
          }}
        >
          <div>Price: </div>
          <Typography
            variant="body2"
            onClick={() => setVal(MIN)}
            sx={{ cursor: "pointer", marginX: "5px" }}
          >
            ${MIN}
          </Typography>
          <div> - </div>
          <Typography
            variant="body2"
            onClick={() => setVal(MAX)}
            sx={{ cursor: "pointer", marginX: "5px" }}
          >
            ${val}
          </Typography>
        </Box>
      </div>
    </Box>
  );
}
