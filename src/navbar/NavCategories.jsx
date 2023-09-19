import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import FireplaceIcon from '@mui/icons-material/Fireplace';
import BlenderIcon from '@mui/icons-material/Blender';
import PianoIcon from '@mui/icons-material/Piano';
import TapAndPlayIcon from '@mui/icons-material/TapAndPlay';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import SolarPowerIcon from '@mui/icons-material/SolarPower';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import { Box,List, ListItem, ListItemText, Typography,Divider, Grid } from '@mui/material';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}



export default function NavCategories() {
  const [value, setValue] = React.useState(-1);

  React.useEffect(() => {
    setValue(-1);
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue === value ? -1 : newValue);
  };

  const handleDocumentClick = (event) => {
    const tabContainer = document.querySelector('.tab-container');
    if (!tabContainer.contains(event.target)) {
      setValue(-1);
    }
  };

  const handleTabClick = (index) => {
    setValue((prevValue) => (prevValue === index ? -1 : index));
  };

  React.useEffect(() => {
    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);



  return (
    <div style={{



      width: "100%",
      marginTop: "64px"

    }}>
      <div className='tab-container'>
      <Tabs className='tab'  sx={{ bgcolor: 'black' }} value={value} onChange={handleChange} aria-label="icon label tabs example">
        <Tab sx={{ color: "white" }} icon={<VolumeUpIcon />} label="Audio, DJ e iluminación" {...a11yProps(0)} onClick={() => handleTabClick(0)} />
        <Tab sx={{ color: "white" }} icon={<FireplaceIcon />} label="Calefactores " {...a11yProps(1)} onClick={() => handleTabClick(1)} />
        <Tab sx={{ color: "white" }} icon={<SmartToyIcon />} label="Juguetería " {...a11yProps(2)} />
        <Tab sx={{ color: "white" }} icon={<BlenderIcon />} label="Electrodomésticos" {...a11yProps(3)} />
        <Tab sx={{ color: "white" }} icon={<PianoIcon />} label="Instrumentos Musicales y Acc" {...a11yProps(4)} />
        <Tab sx={{ color: "white" }} icon={<TapAndPlayIcon />} label="Celulares" {...a11yProps(5)} />
        <Tab sx={{ color: "white" }} icon={<LaptopChromebookIcon />} label="Notebook, Pc y Tablet" {...a11yProps(6)} />
        <Tab sx={{ color: "white" }} icon={<HeadsetMicIcon />} label="Acc. Telefonía e Informática" {...a11yProps(7)} />
        <Tab sx={{ color: "white" }} icon={<SolarPowerIcon />} label="Solar" {...a11yProps(8)} />
        <Tab sx={{ color: "white" }} icon={<MiscellaneousServicesIcon />} label="Servicios" {...a11yProps(9)} />
      </Tabs>
      </div>
      <CustomTabPanel className="tabPanel" value={value} index={0}>
        <List>
         <Grid container spacing={2}>
          <Grid item xs={6} md={4}>
          <VolumeUpIcon sx={{ fontSize: 200 }} />
          </Grid>
          <Grid item  xs={6} md={8}>
          <ListItem button>
          <ListItemText  primary="Audio" />
          </ListItem>
          <Divider sx={{ bgcolor: "white" }} />
          <ListItem button>
          <ListItemText  primary="Iluminación" />
          </ListItem>
          </Grid>
          </Grid>          
        </List>
      </CustomTabPanel>
      <CustomTabPanel className="tabPanel" value={value} index={1}>
      <List>
         <Grid container spacing={2}>
          <Grid item xs={6} md={4}>
          <FireplaceIcon sx={{ fontSize: 200 }} />
          </Grid>
          <Grid item  xs={6} md={8}>
          <ListItem button>
          <ListItemText  primary="Calefactores Leña" />
          </ListItem>
          <Divider sx={{ bgcolor: "white" }} />
          <ListItem button>
          <ListItemText  primary="Calefactores Pellet" />
          </ListItem>
          <Divider sx={{ bgcolor: "white" }} />
          <ListItem button>
          <ListItemText  primary="Kit y accesorios" />
          </ListItem>
          </Grid>
          </Grid>          
        </List>
      </CustomTabPanel>
      <CustomTabPanel className="tabPanel" value={value} index={2}>
      <List>
         <Grid container spacing={2}>
          <Grid item xs={6} md={4}>
          <SmartToyIcon sx={{ fontSize: 200 }} />
          </Grid>
          <Grid item  xs={6} md={8}>
          <ListItem button>
          <ListItemText  primary="Aire libre y deportes" />
          </ListItem>
          <Divider sx={{ bgcolor: "white" }} />
          <ListItem button>
          <ListItemText  primary="Animales Dinos y Muñecos" />
          </ListItem>
          <Divider sx={{ bgcolor: "white" }} />
          <ListItem button>
          <ListItemText  primary="Bebés y primera infancia" />
          </ListItem>
          <Divider sx={{ bgcolor: "white" }} />
          <ListItem button>
          <ListItemText  primary="Cocina, Música y Herramientas" />
          </ListItem>
          <Divider sx={{ bgcolor: "white" }} />
          <ListItem button>
          <ListItemText  primary="Didácticos y Juegos de mesa" />
          </ListItem>
          <Divider sx={{ bgcolor: "white" }} />
          <ListItem button>
          <ListItemText  primary="Muñecas, Bebés y Coches " />
          </ListItem>
          <Divider sx={{ bgcolor: "white" }} />
          <ListItem button>
          <ListItemText  primary="Peluches" />
          </ListItem>
          <Divider sx={{ bgcolor: "white" }} />
          <ListItem button>
          <ListItemText  primary="Verano" />
          </ListItem>
          </Grid>
          </Grid>          
        </List>
      </CustomTabPanel>
      <CustomTabPanel className="tabPanel" value={value} index={3}>
      <List>
         <Grid container spacing={2}>
          <Grid item xs={6} md={4}>
          <BlenderIcon sx={{ fontSize: 200 }} />
          </Grid>
          <Grid item  xs={6} md={8}>
          <ListItem button>
          <ListItemText  primary="TV" />
          </ListItem>
          <Divider sx={{ bgcolor: "white" }} />
          <ListItem button>
          <ListItemText  primary="Climatización" />
          </ListItem>
          <Divider sx={{ bgcolor: "white" }} />
          <ListItem button>
          <ListItemText  primary="Grandes Electrodomésticos" />
          </ListItem>
          <Divider sx={{ bgcolor: "white" }} />
          <ListItem button>
          <ListItemText  primary="Pequeños Electrodomésticos" />
          </ListItem>
          <Divider sx={{ bgcolor: "white" }} />
          <ListItem button>
          <ListItemText  primary="Empotrables" />
          </ListItem>
          </Grid>
          </Grid>          
        </List>
      </CustomTabPanel>
      <CustomTabPanel className="tabPanel" value={value} index={4}>
      <List>
         <Grid container spacing={2}>
          <Grid item xs={6} md={4}>
          <PianoIcon sx={{ fontSize: 200 }} />
          </Grid>
          <Grid item  xs={6} md={8}>
          <ListItem button>
          <ListItemText  primary="Instrumentos" />
          </ListItem>
          <Divider sx={{ bgcolor: "white" }} />
          <ListItem button>
          <ListItemText  primary="Accesorios" />
          </ListItem>          
          </Grid>
          </Grid>          
        </List>
      </CustomTabPanel>
      <CustomTabPanel className="tabPanel" value={value} index={5}>
        Item Three
      </CustomTabPanel>
      <CustomTabPanel className="tabPanel" value={value} index={5}>
        Item Three
      </CustomTabPanel>
      <CustomTabPanel className="tabPanel" value={value} index={6}>
        Item Three
      </CustomTabPanel>
      <CustomTabPanel className="tabPanel" value={value} index={7}>
        Item Three
      </CustomTabPanel>
      <CustomTabPanel className="tabPanel" value={value} index={8}>
        Item Three
      </CustomTabPanel>
      <CustomTabPanel className="tabPanel" value={value} index={9}>
        Item Three
      </CustomTabPanel>
    </div>
  );
}

