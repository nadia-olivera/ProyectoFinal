import * as React from 'react';
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

export default function NavCategories() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  return (
    <div style={{
                
      
      
      width:"100%",
      marginTop:"64px"   
      
  }}>
    <Tabs className='tab' sx={{bgcolor:'black'}} value={value} onChange={handleChange} aria-label="icon label tabs example">
      <Tab  sx={{color:"white"}} icon={<VolumeUpIcon />} label="Audio, DJ e iluminación" />
      <Tab  sx={{color:"white"}} icon={<FireplaceIcon />} label="Calefactores " />
      <Tab  sx={{color:"white"}} icon={<BlenderIcon />} label="Electrodomésticos" />
      <Tab  sx={{color:"white"}} icon={<PianoIcon />} label="Instrumentos Musicales y Acc" />
      <Tab  sx={{color:"white"}} icon={<TapAndPlayIcon />} label="Celulares" />
      <Tab  sx={{color:"white"}} icon={<LaptopChromebookIcon />} label="Notebook, Pc y Tablet" />
      <Tab  sx={{color:"white"}} icon={<HeadsetMicIcon />} label="Acc. Telefonía e Informática" />
      <Tab  sx={{color:"white"}} icon={<SolarPowerIcon />} label="Solar" />
      <Tab  sx={{color:"white"}} icon={<MiscellaneousServicesIcon />} label="Servicios" />
    </Tabs>
    </div>
  );
}