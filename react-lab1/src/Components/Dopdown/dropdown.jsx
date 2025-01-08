import Dropdown from 'react-bootstrap/Dropdown';
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const handleSelect = (lang) => {
    i18n.changeLanguage(lang); 
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="black" id="dropdown-basic">
        {i18n.language === 'en' ? 'English' : 'Русский'}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => handleSelect('en')}>English</Dropdown.Item>
        <Dropdown.Item onClick={() => handleSelect('ru')}>Русский</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default LanguageSwitcher;