import React from 'react';
import { Accordion, AccordionItem } from 'react-light-accordion';
import './Collapse.styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function CollapseMenu({ funds }) {
  const uniqueNames = [];
  const getUniqueNames = () => {
    funds.map((fund) => {
      if (uniqueNames.indexOf(fund.fund_name) === -1) {
        uniqueNames.push(fund.fund_name);
      }
      return null;
    });
  };
  getUniqueNames();
  return (
    <div className='collapse-wrapper'>
      <div className='menu-title'>
        <FontAwesomeIcon icon='map' className='map' />
        Menu
      </div>
      <Accordion atomic={true}>
        <AccordionItem title='Funds List '>
          {uniqueNames.map((name) => (
            <div key={name} className='list-item'>
              {name}
            </div>
          ))}
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default CollapseMenu;
