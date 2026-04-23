import React, { useState, useRef } from 'react';
import CommercialQuoteModal from '../components/forms/CommercialQuoteModal';
import VehicleQuoteModal from '../components/forms/VehicleQuoteModal';
import ChinaAustraliaQuoteModal from '../components/forms/ChinaAustraliaQuoteModal';
import ChatToUsModal from '../components/forms/ChatToUsModal';
import ChinaFCLQuoteModal from '../components/forms/ChinaFCLQuoteModal';
import ChinaAirFreightModal from '../components/forms/ChinaAirFreightModal';
import CratesQuoteModal from '../components/forms/CratesQuoteModal';
import FinanceModal from '../components/forms/FinanceModal';
import InstantFCLQuote from '../components/forms/InstantFCLQuote';
import PopupJourney from '../components/forms/PopupJourney';
import PopupJourneyChinatoAus from '../components/forms/PopupJourneyChinatoAus';
import ProductSampleQuote from '../components/forms/ProductSampleQuote';
import CustomsClearanceForm from '../components/forms/CustomsClearanceForm';
import ChinaToAusMultiPopup from '../components/forms/ChinaToAusMultiPopup';
import PersonalForm from '../components/forms/PersonalForm';
import PopupJourneyPersonal from '../components/forms/PopupJourneyPersonal';
import PopupJourneyCustomClearance from '../components/forms/PopupJourneyCustomClearance';
import PopupJourneyFreights from '../components/forms/PopupJourneyFreights';
import AutoFormOtherModal from '../components/forms/AutoFormOtherModal';
import PaperformModal from '../components/forms/PaperformModal';

interface ModalContext {
  vehicleQuote: boolean;
  commercialQuote: boolean;
  chinaAustraliaQuote: boolean;
  chatToUs: boolean;
  financeModal: boolean;
  instantFCLQuote: boolean;
  popupJourney: boolean;
  popupJourneyChinatoAus: boolean;
  productSampleQuote: boolean;
  customsClearanceForm: boolean;
  chinaToAusMultiPopup: boolean;
  personalForm: boolean;
  autoFormOther: boolean;
  journeyContext?: string;
  chinaToAusJourneyType?: string;
  showVehicleQuote: (boolean: boolean) => void;
  showCommercialQuote: (boolean: boolean) => void;
  showChinaAustraliaQuote: (boolean: boolean) => void;
  showChatToUs: (boolean: boolean) => void;
  showFinanceModal: (boolean: boolean) => void;
  closeAllModals: () => void;
  showChinaFCLQuote: (boolean: boolean) => void;
  showChinaAirFreightQuote: (boolean: boolean) => void;
  showCratesQuote: (boolean: boolean) => void;
  showInstantFCLQuote: (boolean: boolean) => void;
  showPopupJourney: (boolean: boolean) => void;
  showPopupJourneyChinatoAus: (boolean: boolean) => void;
  showPersonalForm: (boolean: boolean) => void;
  showProductSampleQuote: (boolean: boolean) => void;
  showCustomsClearanceForm: (boolean: boolean) => void;
  setJourney: (string: string) => void;
  showChinaToAusMultiPopup: (boolean: boolean) => void;
  setChinaToAusJourneyType: (type: string) => void;
  showPopupJourneyPersonal: (show: boolean) => void;
  isPopupJourneyPersonalVisible: boolean;
  showPopupJourneyCustomClearance: (show: boolean) => void;
  isPopupJourneyCustomClearanceVisible: boolean;
  showPopupJourneyFreights: (show: boolean) => void;
  isPopupJourneyFreightsVisible: boolean;
  showAutoFormOther: (boolean: boolean) => void;
  paperformModal: boolean;
  showPaperformModal: (id: string | null) => void;
  paperformId?: string | null;
  showFullscreenForm: boolean;
  setShowFullscreenForm: (show: boolean) => void;
}

const ModalContext = React.createContext<ModalContext>({
  vehicleQuote: false,
  commercialQuote: false,
  chinaAustraliaQuote: false,
  chatToUs: false,
  popupJourneyChinatoAus: false,
  financeModal: false,
  instantFCLQuote: false,
  popupJourney: false,
  productSampleQuote: false,
  personalForm: false,
  customsClearanceForm: false,
  autoFormOther: false,
  journeyContext: '',
  chinaToAusMultiPopup: false,
  chinaToAusJourneyType: '',
  showVehicleQuote: () => {},
  showCommercialQuote: () => {},
  showChinaAustraliaQuote: () => {},
  showChatToUs: () => {},
  showFinanceModal: () => {},
  showPopupJourneyChinatoAus: () => {},
  closeAllModals: () => {},
  showChinaFCLQuote: () => {},
  showChinaAirFreightQuote: () => {},
  showCratesQuote: () => {},
  showInstantFCLQuote: () => {},
  showPopupJourney: () => {},
  showProductSampleQuote: () => {},
  showCustomsClearanceForm: () => {},
  setJourney: () => {},
  showChinaToAusMultiPopup: () => {},
  showPersonalForm: () => {},
  setChinaToAusJourneyType: () => {},
  showPopupJourneyPersonal: () => {},
  isPopupJourneyPersonalVisible: false,
  showPopupJourneyCustomClearance: () => {},
  isPopupJourneyCustomClearanceVisible: false,
  showPopupJourneyFreights: () => {},
  isPopupJourneyFreightsVisible: false,
  showAutoFormOther: () => {},
  paperformModal: false,
  showPaperformModal: () => {},
  paperformId: null,
  showFullscreenForm: false,
  setShowFullscreenForm: () => {},
});

// ─── Scroll lock helpers ────────────────────────────────────────────────────
// Fixes the body in place (preventing scroll-jump) while a modal is open,
// then restores the exact scroll position when it closes.

function lockScroll() {
  const scrollY = window.scrollY;
  document.body.dataset.scrollY = String(scrollY);
  document.body.style.position = 'fixed';
  document.body.style.top = `-${scrollY}px`;
  document.body.style.width = '100%';
  document.body.style.overflowY = 'scroll'; // keeps scrollbar width stable
}

function unlockScroll() {
  const scrollY = parseInt(document.body.dataset.scrollY || '0', 10);
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.width = '';
  document.body.style.overflowY = '';
  delete document.body.dataset.scrollY;
window.scrollTo(0, scrollY);
}
// ────────────────────────────────────────────────────────────────────────────

export const ModalStore = ({children} : {children: React.ReactNode}) => {
  const [vehicleQuote, setVehicleQuote] = useState(false);
  const [commercialQuote, setCommercialQuote] = useState(false);
  const [chinaAustraliaQuote, setChinaAustraliaQuote] = useState(false);
  const [chatToUs, setChatToUs] = useState(false);
  const [financeModal, setFinanceModal] = useState(false);
  const [popupJourneyChinatoAus, setPopupJourneyChinatoAus] = useState(false);
  const [chinaFCLQuote, setChinaFCLQuote] = useState(false);
  const [instantFCLQuote, setInstantFCLQuote] = useState(false);
  const [chinaAirFreightQuote, setChinaAirFreightQuote] = useState(false);
  const [cratesQuote, setCratesQuote] = useState(false);
  const [popupJourney, setPopupJourney] = useState(false);
  const [productSampleQuote, setProductSampleQuote] = useState(false);
  const [customsClearanceForm, setCustomsClearanceForm] = useState(false);
  const [personalForm, setPersonalForm] = useState(false);
  const [journeyContext, setJourneyContext] = useState('');
  const [chinaToAusMultiPopup, setChinaToAusMultiPopup] = useState(false);
  const [chinaToAusJourneyType, setChinaToAusJourneyType] = useState('');
  const [isPopupJourneyPersonalVisible, setIsPopupJourneyPersonalVisible] = useState(false);
  const [isPopupJourneyCustomClearanceVisible, setIsPopupJourneyCustomClearanceVisible] = useState(false);
  const [isPopupJourneyFreightsVisible, setIsPopupJourneyFreightsVisible] = useState(false);
  const [autoFormOther, setAutoFormOther] = useState(false);
  const [paperformModal, setPaperformModal] = useState(false);
  const [paperformId, setPaperformId] = useState<string | null>(null);
  const [showFullscreenForm, setShowFullscreenFormState] = useState(false);

  // Track whether the scroll is currently locked so we only unlock once
  const scrollLocked = useRef(false);

  const closeAllModals = () => {
    setChinaAustraliaQuote(false);
    setChatToUs(false);
    setFinanceModal(false);
    setVehicleQuote(false);
    setCommercialQuote(false);
    setPopupJourneyChinatoAus(false);
    setChinaFCLQuote(false);
    setChinaAirFreightQuote(false);
    setCratesQuote(false);
    setInstantFCLQuote(false);
    setPopupJourney(false);
    setProductSampleQuote(false);
    setCustomsClearanceForm(false);
    setChinaToAusMultiPopup(false);
    setPersonalForm(false);
    setIsPopupJourneyCustomClearanceVisible(false);
    setIsPopupJourneyFreightsVisible(false);
    setAutoFormOther(false);
    setPaperformModal(false);
    setShowFullscreenFormState(false);

    // Restore scroll position only if we previously locked it
    if (scrollLocked.current) {
      unlockScroll();
      scrollLocked.current = false;
    }
  };

  const showVehicleQuote = (boolean : boolean) => {
    closeAllModals();
    setVehicleQuote(boolean);
  };

  const showCommercialQuote = (boolean: boolean) => {
    closeAllModals();
    setCommercialQuote(boolean);
  };

  const showPopupJourneyChinatoAus = (boolean: boolean) => {
    closeAllModals();
    setPopupJourneyChinatoAus(boolean);
  };

  const showChinaAustraliaQuote = (boolean : boolean) => {
    closeAllModals();
    setChinaAustraliaQuote(boolean);
  };

  const showChatToUs = (boolean : boolean) => {
    closeAllModals();
    setChatToUs(boolean);
  };

  const showFinanceModal = (boolean : boolean) => {
    closeAllModals();
    setFinanceModal(boolean);
  };
  
  const showChinaFCLQuote = (boolean : boolean) => {
    closeAllModals();
    setChinaFCLQuote(boolean);
  };

  const showInstantFCLQuote = (boolean : boolean) => {
    closeAllModals();
    setInstantFCLQuote(boolean);
  };

  const showChinaAirFreightQuote = (boolean: boolean) => {
    closeAllModals();
    setChinaAirFreightQuote(boolean);
  };

  const showCratesQuote = (boolean: boolean) => {
    closeAllModals();
    setCratesQuote(boolean);
  }

  const showPopupJourney = (boolean: boolean) => {
    closeAllModals();
    setPopupJourney(boolean);
  }

  const showProductSampleQuote = (boolean: boolean) => {
    closeAllModals();
    setProductSampleQuote(boolean);
  }

  const showCustomsClearanceForm = (boolean: boolean) => {
    closeAllModals();
    setCustomsClearanceForm(boolean);
  }

  const showChinaToAusMultiPopup = (boolean: boolean) => {
    closeAllModals();
    setChinaToAusMultiPopup(boolean);
  }

  const setJourney = (string:string) => {
    setJourneyContext(string);
  }

  const showPersonalForm = (boolean: boolean) => {
    closeAllModals();
    setPersonalForm(boolean);
  }

  const showPopupJourneyPersonal = (show: boolean) => {
    setIsPopupJourneyPersonalVisible(show);
  };

  const showPopupJourneyCustomClearance = (show: boolean) => {
    setIsPopupJourneyCustomClearanceVisible(show);
  };

  const showPopupJourneyFreights = (show: boolean) => {
    closeAllModals();
    setIsPopupJourneyFreightsVisible(show);
  };

  const showAutoFormOther = (boolean: boolean) => {
    closeAllModals();
    setAutoFormOther(boolean);
  };

  const showPaperformModal = (id: string | null) => {
    if (id) {
      // Opening — lock scroll first, then show modal
      lockScroll();
      scrollLocked.current = true;
      closeAllModals(); // closes other modals without unlocking (lock is re-set above)
      setPaperformModal(true);
      setPaperformId(id);
    } else {
      // Explicitly called with null means close
      closeAllModals();
    }
  };

  const setShowFullscreenForm = (show: boolean) => {
    setShowFullscreenFormState(show);
  };

  return (
    <ModalContext.Provider 
      value={{
        vehicleQuote, 
        commercialQuote, 
        chinaAustraliaQuote,
        chatToUs,
        financeModal,
        instantFCLQuote,
        popupJourney,
        popupJourneyChinatoAus,
        productSampleQuote,
        personalForm,
        customsClearanceForm,
        autoFormOther,
        journeyContext,
        chinaToAusMultiPopup,
        chinaToAusJourneyType,
        showVehicleQuote, 
        showCommercialQuote,
        showChinaAustraliaQuote,
        showChatToUs,
        showPersonalForm,
        showFinanceModal,
        closeAllModals,
        showChinaFCLQuote,
        showChinaAirFreightQuote,
        showCratesQuote,
        showInstantFCLQuote,
        showPopupJourney,
        showProductSampleQuote,
        showCustomsClearanceForm,
        setJourney,
        showChinaToAusMultiPopup,
        showPopupJourneyChinatoAus,
        setChinaToAusJourneyType,
        showPopupJourneyPersonal,
        isPopupJourneyPersonalVisible,
        showPopupJourneyCustomClearance,
        isPopupJourneyCustomClearanceVisible,
        showPopupJourneyFreights,
        isPopupJourneyFreightsVisible,
        showAutoFormOther,
        paperformModal,
        showPaperformModal,
        paperformId,
        showFullscreenForm,
        setShowFullscreenForm,
      }}
    >
      {children}
      {vehicleQuote && <VehicleQuoteModal />}
      {commercialQuote && <CommercialQuoteModal />}
      {chinaAustraliaQuote && <ChinaAustraliaQuoteModal />}
      {chatToUs && <ChatToUsModal />}
      {personalForm && <PersonalForm />}
      {financeModal && <FinanceModal />}
      {chinaFCLQuote && <ChinaFCLQuoteModal />}
      {chinaAirFreightQuote && <ChinaAirFreightModal />}
      {cratesQuote && <CratesQuoteModal />}
      {instantFCLQuote && <InstantFCLQuote />}
      {popupJourney && <PopupJourney />}
      {popupJourneyChinatoAus && <PopupJourneyChinatoAus />}
      {productSampleQuote && <ProductSampleQuote />}
      {customsClearanceForm && <CustomsClearanceForm />}
      {chinaToAusMultiPopup && <ChinaToAusMultiPopup />}
      {isPopupJourneyPersonalVisible && <PopupJourneyPersonal />}
      {isPopupJourneyCustomClearanceVisible && <PopupJourneyCustomClearance />}
      {isPopupJourneyFreightsVisible && <PopupJourneyFreights />}
      {autoFormOther && <AutoFormOtherModal />}
      {paperformModal && <PaperformModal paperformId={paperformId} />}
    </ModalContext.Provider>
  );
};

export default ModalContext;