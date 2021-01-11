'use strict';

/* making tabs */
const tabs = document.querySelector('.tabs');
const tabButtons = document.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(document.querySelectorAll('[role="tabpanel"]'));
console.log(tabPanels);

function handleTabClick(event) {
    // hide all tab panels
    tabPanels.forEach(panel => {
        panel.hidden = true
    });

    // mark all tabs as selected
    tabButtons.forEach(tabs => {
        tabs.setAttribute('aria-selected', false);
    });
    // mark the clicked tab as selected
    event.currentTarget.setAttribute('aria-selected', true);

    // find the associated tab panels
    const { id } = event.currentTarget;

    /* METHOD 1
    const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"`);
    tabPanel.hidden = false; */

    // METHOD 2 find in array of tab tabPanels

    const tabPanel = tabPanels.find(
        panel =>
            panel.getAttribute('aria-labelledby') === id
    );
    console.log(tabPanel);
    tabPanel.hidden = false;

}

tabButtons.forEach(button => button.addEventListener('click', handleTabClick));
