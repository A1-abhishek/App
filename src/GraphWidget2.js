import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const GraphWidget2 = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [dropdownAnchorEl, setDropdownAnchorEl] = useState(null);
  const [labels, setLabels] = useState([]);
  const [dataPoints, setDataPoints] = useState([]);
  const openMenu = Boolean(anchorEl);
  const openDropdown = Boolean(dropdownAnchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setDropdownAnchorEl(null);
  };

  const handleDropdownClick = (event) => {
    setDropdownAnchorEl(event.currentTarget);
  };

  // Function to generate labels for the past 4 hours in hh:mm format at 15-minute intervals in IST
  const generateTimeLabels = (startTime, endTime) => {
    const labels = [];
    const offsetIST = 5.5 * 60 * 60 * 1000; // IST offset in milliseconds

    for (let time = startTime.getTime(); time <= endTime.getTime(); time += 15 * 60 * 1000) {
      const labelTime = new Date(time + offsetIST);
      const hours = labelTime.getUTCHours().toString().padStart(2, '0');
      const minutes = labelTime.getUTCMinutes().toString().padStart(2, '0');
      labels.push(`${hours}:${minutes}`);
    }
    return labels;
  };

  useEffect(() => {
    // Initial data load
    const now = new Date();
    const startTime = new Date(now.getTime() - 4 * 60 * 60 * 1000); // 4 hours ago
    const initialLabels = generateTimeLabels(startTime, now);
    const initialDataPoints = Array.from({ length: initialLabels.length }, () => Math.floor(Math.random() * 100));

    setLabels(initialLabels);
    setDataPoints(initialDataPoints);

    // Set interval to update data every 1 minute
    const interval = setInterval(() => {
      const now = new Date();
      const newDataPoint = Math.floor(Math.random() * 100);

      setLabels((prevLabels) => {
        const updatedLabels = [...prevLabels];
        const lastLabel = updatedLabels[updatedLabels.length - 1];
        const lastLabelDate = new Date();
        lastLabelDate.setUTCHours(parseInt(lastLabel.split(':')[0]), parseInt(lastLabel.split(':')[1]));
        const nextLabelDate = new Date(lastLabelDate.getTime() + 1 * 60 * 1000); // Add 1 minute
        const nextLabelHours = nextLabelDate.getUTCHours().toString().padStart(2, '0');
        const nextLabelMinutes = nextLabelDate.getUTCMinutes().toString().padStart(2, '0');
        const nextLabel = `${nextLabelHours}:${nextLabelMinutes}`;
        updatedLabels.push(nextLabel);
        if (updatedLabels.length > 16) {
          updatedLabels.shift(); // Keep only the last 16 labels
        }
        return updatedLabels;
      });

      setDataPoints((prevDataPoints) => {
        const updatedDataPoints = [...prevDataPoints, newDataPoint];
        if (updatedDataPoints.length > 16) {
          updatedDataPoints.shift(); // Keep only the last 16 data points
        }
        return updatedDataPoints;
      });
    }, 60000); // 1 minute interval

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'My First dataset',
        data: dataPoints,
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
    scales: {
      x: {
        type: 'category',
        ticks: {
          callback: function (value, index) {
            return index % 15 === 0 ? value : '';
          },
        },
      },
    },
  };

  const boxStyle = {
    border: '1.5px solid #000',
    borderRadius: '10px',
    padding: '10px',
    width: '600px',
    height: '400px',
    position: 'relative',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  };

  const titleStyle = {
    position: 'absolute',
    top: '2px',
    left: '12px',
    margin: 0,
    fontSize: '14px',
    fontWeight: 'bold',
  };

  const hrStyle = {
    width: '100%',
    border: '1px solid #ddd',
    margin: '18px 0',
  };

  const settingsButtonStyle = {
    position: 'absolute',
    top: '-5px',
    right: '0px',
  };

  return (
    <div style={{ position: 'relative' }}>
      <div style={boxStyle}>
        <h2 style={titleStyle}>Data Graph Chart</h2>
        <IconButton style={settingsButtonStyle} onClick={handleClick}>
          <MoreVertIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={openMenu}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem onClick={handleClose}>
            Widget Settings
            <IconButton
              onClick={handleDropdownClick}
              aria-haspopup="true"
              aria-owns={openDropdown ? 'dropright-menu' : undefined}
              size="small"
              style={{ marginLeft: '3px', color: 'black' }}
            >
              <ArrowRightRoundedIcon sx={{ fontSize: 20 }} />
            </IconButton>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            Compare Graph
            <IconButton
              onClick={handleDropdownClick}
              aria-haspopup="true"
              aria-owns={openDropdown ? 'dropright-menu' : undefined}
              size="small"
              style={{ marginLeft: '3px', color: 'black' }}
            >
              <ArrowRightRoundedIcon sx={{ fontSize: 20 }} />
            </IconButton>
          </MenuItem>
          <MenuItem onClick={handleClose}>Generate Report</MenuItem>
          <MenuItem onClick={handleClose}>About</MenuItem>
        </Menu>
        <hr style={hrStyle} />
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default GraphWidget2;
