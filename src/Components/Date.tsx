import React, { ChangeEventHandler, useRef, useState } from 'react';
import 'react-day-picker/dist/style.css';
import { format, isValid, parse } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import { usePopper } from 'react-popper';

export default function DatePickerDialog(prop) {

  let clas = prop.clas

  //sets up the callendar input

  const [selected, setSelected] = useState<Date>();
  const [inputValue, setInputValue] = useState<string>('');
  const [isPopperOpen, setIsPopperOpen] = useState(false);

  const popperRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  );

  const popper = usePopper(popperRef.current, popperElement, {
    placement: 'bottom-start'
  });

  //function closing the date picker

  const closePopper = () => {
    setIsPopperOpen(false);
    buttonRef?.current?.focus();
  };

  //changes date if the date in the input is valid

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputValue(e.currentTarget.value);
    const date = parse(e.currentTarget.value, 'y-MM-dd', new Date());
    if (isValid(date)) {
      setSelected(date);
    } else {
      setSelected(undefined);
    }
  };

  //opens the date picker 
  
  const handleButtonClick = () => {
    setIsPopperOpen(true);
  };

  //changes input when date is changed

  const handleDaySelect = (date) => {
    setSelected(date);
    if (date) {
      setInputValue(format(date, 'dd/MM/y'));
      closePopper();
    } else {
      setInputValue('');
    }
  };

  return (
    <div >
      <div ref={popperRef} className="date">
        <input id={clas} type="text" placeholder={""} value={inputValue} onChange={handleInputChange} className="input-reset pa2 ma2 bg-white black ba" onClick={handleButtonClick} onFocus={handleButtonClick} required/>
      </div>
      {isPopperOpen && (
        <>
          <div className="disabler" onClick={closePopper}>
          </div>
          <div tabIndex={-1} style={popper.styles.popper} className="dialog-sheet" {...popper.attributes.popper} ref={setPopperElement} role="dialog">
            <DayPicker fromYear={1900} toYear={2022} initialFocus={isPopperOpen} mode="single" defaultMonth={selected} selected={selected} onSelect={handleDaySelect} captionLayout="dropdown" />
          </div>
        </>
      )}
    </div>
  );
}
