import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { useTranslation } from 'react-i18next';
import '../Activities/activities.scss';

const Activities = () => {
  const { t } = useTranslation();
  
  return(
    <>
    <h2>{t('activities')}</h2>
      <div className="act-cards-container">
        <div className="act-mini-container">
          <img src="./images/icon-ba.svg" alt="Icône Business Analyse" className="card-image" />
          <div className="activities-card">
            <h3> BUSINESS ANALYSE </h3>
            <p> {t('actBA')} </p>
          </div>
        </div>
        <div className="act-mini-container">
          <img src="./images/icon-ui.svg" alt="Icône UX Design" className="card-image" />
          <div className="activities-card">
            <h3> UX DESIGN </h3>
            <p> {t('actUX')} </p>
          </div>
        </div>
      </div>

      <div className='chips-container'>
        <Stack direction="row" spacing={2}>
          <Chip label={t('analysis')} variant="outlined"  sx={{ backgroundColor: '#D9D9D9', '& .MuiChip-label': {color: '#141414' }}} />
          <Chip label={t('conception')} variant="outlined"  sx={{ backgroundColor: '#D9D9D9', '& .MuiChip-label': {color: '#141414' }}} />
          <Chip label={t('data')} variant="outlined"  sx={{ backgroundColor: '#D9D9D9', '& .MuiChip-label': {color: '#141414' }}} />
          <Chip label={t('qual')} variant="outlined"  sx={{ backgroundColor: '#D9D9D9', '& .MuiChip-label': {color: '#141414' }}} />
          <Chip label={t('gestion')} variant="outlined"  sx={{ backgroundColor: '#D9D9D9', '& .MuiChip-label': {color: '#141414' }}} />
          <Chip label={t('agile')} variant="outlined"  sx={{ backgroundColor: '#D9D9D9', '& .MuiChip-label': {color: '#141414' }}} />
        </Stack>
        <Stack direction="row" spacing={2}>
          <Chip label={t('design')} variant="outlined"  sx={{ backgroundColor: '#D9D9D9', '& .MuiChip-label': {color: '#141414' }}} />
          <Chip label={t('proto')} variant="outlined"  sx={{ backgroundColor: '#D9D9D9', '& .MuiChip-label': {color: '#141414' }}} />
          <Chip label={t('ux')} variant="outlined"  sx={{ backgroundColor: '#D9D9D9', '& .MuiChip-label': {color: '#141414' }}} />
          <Chip label={t('dthink')} variant="outlined"  sx={{ backgroundColor: '#D9D9D9', '& .MuiChip-label': {color: '#141414' }}} />
        </Stack>
      </div>
    </>
  )
};

export default Activities;