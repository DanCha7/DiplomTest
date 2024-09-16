import React, { useRef, useState } from "react";
import styled from "styled-components";

interface AccordionProps {
  title: string;
  content: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const accordionItemRef = useRef<HTMLDivElement>(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AccordionItem className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        <h3>{title}</h3>
        <span className={`accordion-icon ${isOpen ? "open" : ""}`}>+</span>
      </div>

      <AccordionContent
        $isOpen={isOpen}
        $height={accordionItemRef.current?.offsetHeight || 0}
        className="accordion-content"
      >
        <div ref={accordionItemRef} className="accordion-body">
          {content}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};

const AccordionItem = styled.div`

h3 {
  font-family : Intro Regular;
}`;


const AccordionContent = styled.div<{ $isOpen: boolean; $height: number }>`
  opacity: ${(p) => (p.$isOpen ? 1 : 0)};
  height: ${(p) => (p.$isOpen ? p.$height : 0)}px;
  padding: ${(p) => !p.$isOpen && 0};
  transition: all 200ms ease-out;
`;

export default Accordion;
