import React, { useState } from 'react';
import { Box, Tabs, Tab } from '@mui/material';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </Box>
  );
}

const MyTabs = ({tabs, rightComponent}) => {
  const [value, setValue] = useState(0);

  const handleChangeTab = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Box sx={{
        flexDirection: 'column',
        borderBottom: 1
      }}>
        <Tabs value={value} onChange={handleChangeTab}>
          {
            tabs.map((tab, i) => {
              return (
                <Tab label={tab.label} key={`tabs-${i}`} />
              )
            })
          }
        </Tabs>
        
      </Box>
      {
        tabs.map((tab, i) => {
          return (
            <TabPanel value={value} index={i} key={`tab-${i}`}>{tab.content}</TabPanel>
          )
        })
      }
    </Box>
  )
}

export default MyTabs;