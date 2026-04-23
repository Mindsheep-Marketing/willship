import React, { useContext, useRef, useEffect, useState } from "react";
import ModalContext from "../../context/ModalContext";
import useOnClickOutside from "../../utils/hooks/useOnClickOutside";
import useIsSmall from "../../utils/hooks/useIsSmall";
import Head from "next/head";

interface Props {
  paperformId?: string | null;
  title?: string;
  height?: string;
}

const PaperformModal = ({ 
  paperformId = "mlc28uxr", 
  title = "Get Your Quote",
  height = "600px"
}: Props) => {
  const formId = paperformId || "mlc28uxr";
  const { showPaperformModal } = useContext(ModalContext);
  const isSmall = useIsSmall();
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [preloadStarted, setPreloadStarted] = useState(false);
  const [modalOpenTime] = useState(Date.now());

  const ref = useRef(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const preloadRef = useRef<HTMLIFrameElement | null>(null);
  
  const handleCloseModal = () => {
    showPaperformModal(null);
  };
  
  useOnClickOutside(ref, handleCloseModal);

  // Background iframe preload for faster load
  useEffect(() => {
    const warmIframeReady = sessionStorage.getItem('paperformWarmIframe');
    const wasPreloaded = sessionStorage.getItem('paperformPreloaded');
    const preloadTime = sessionStorage.getItem('paperformPreloadTime');
    
    if (warmIframeReady === 'ready' && wasPreloaded && preloadTime) {
      return;
    }
    
    if (wasPreloaded && preloadTime) {
      return;
    }
    
    if (!preloadStarted) {
      setPreloadStarted(true);
      
      const modalIframe = document.createElement('iframe');
      modalIframe.src = `https://${formId}.paperform.co/`;
      modalIframe.style.position = 'absolute';
      modalIframe.style.left = '-9999px';
      modalIframe.style.top = '-9999px';
      modalIframe.style.width = '800px';
      modalIframe.style.height = '600px';
      modalIframe.style.visibility = 'hidden';
      modalIframe.style.opacity = '0';
      modalIframe.setAttribute('aria-hidden', 'true');
      modalIframe.setAttribute('tabindex', '-1');
      modalIframe.setAttribute('loading', 'eager');
      modalIframe.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
      modalIframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
      
      document.body.appendChild(modalIframe);
      
      const startTime = performance.now();
      modalIframe.onload = () => {
        const loadTime = performance.now() - startTime;
        sessionStorage.setItem('paperformModalCache', 'true');
      };

      modalIframe.onerror = () => {
        if (document.body.contains(modalIframe)) {
          document.body.removeChild(modalIframe);
        }
        setTimeout(() => setIframeLoaded(true), 500);
      };
      
      preloadRef.current = modalIframe;
    }
  }, [formId, preloadStarted]);

  // NOTE: Scroll lock is intentionally NOT handled here.
  // It is managed by ModalContext (lockScroll/unlockScroll) which captures
  // the scroll position at click time — before any React re-render occurs.
  // Adding a second scroll lock here caused a race condition and scroll jump.

  const LoadingSpinner = () => (
    <div className="flex items-center justify-center h-full bg-white">
      <div className="w-8 h-8 border-2 border-orange-500 rounded-full animate-spin border-t-transparent"></div>
    </div>
  );

  const handleIframeLoad = () => {
    const minSpinnerTime = 800;
    const elapsedTime = Date.now() - modalOpenTime;
    const remainingTime = Math.max(0, minSpinnerTime - elapsedTime);
    setTimeout(() => {
      setIframeLoaded(true);
    }, remainingTime);
  };

  const iframeProps = {
    src: `https://${formId}.paperform.co/`,
    title: title,
    onLoad: handleIframeLoad,
    loading: "eager" as const,
    referrerPolicy: "strict-origin-when-cross-origin" as const,
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    style: { 
      visibility: (iframeLoaded ? 'visible' : 'hidden') as 'visible' | 'hidden',
      minHeight: '500px'
    }
  };

  if (isSmall) {
    return (
      <div className="fixed inset-0 z-50 bg-white">
        <button
          onClick={handleCloseModal}
          className="absolute z-50 flex items-center justify-center w-12 h-12 text-3xl font-bold text-gray-600 bg-white rounded-full shadow-lg top-4 right-4 hover:text-red-600 bg-opacity-80 hover:bg-opacity-100"
          aria-label="Close fullscreen form"
        >
          ×
        </button>
        
        {!iframeLoaded && (
          <div className="absolute inset-0 z-30">
            <LoadingSpinner />
          </div>
        )}
        
        <iframe
          ref={iframeRef}
          {...iframeProps}
          className="w-full h-full border-0"
        />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-50 bg-opacity-30">
      <div className="flex flex-col w-full max-w-6xl mx-auto overflow-hidden">
        <div className="relative bg-white rounded-3xl overflow-hidden flex flex-col h-full max-h-[80vh]" ref={ref}>
          <button
            onClick={handleCloseModal}
            className="absolute z-50 flex items-center justify-center w-10 h-10 text-3xl font-bold bg-white rounded-full shadow-lg top-4 right-4 text-darkBlue hover:text-red bg-opacity-80 hover:bg-opacity-100"
            aria-label="Close modal"
          >
            ×
          </button>

          {!iframeLoaded && (
            <div className="absolute inset-0 z-30 rounded-3xl">
              <LoadingSpinner />
            </div>
          )}

          <div className="flex-1 w-full min-h-0 overflow-hidden">
            <iframe
              ref={iframeRef}
              {...iframeProps}
              className="w-full h-full border-0 rounded-3xl !min-h-[80vh]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaperformModal;