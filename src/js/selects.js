const defaultSelect = () => {
  const element = document.querySelector('.header__select');
  const choices = new Choices(element, {
    searchEnabled: false,
    position: 'bottom',
    itemSelectText: '',
    shouldSort: false,
    allowHTML: true,
    classNames: {
      containerOuter: 'header__choices',
      containerInner: 'header__choices-inner',
      input: 'header__choices-input',
      inputCloned: 'header__choices-input--cloned',
      list: 'header__choices-list',
      listItems: 'header__choices-list--multiple',
      listSingle: 'header__choices-list--single',
      listDropdown: 'header__choices-list--dropdown',
      item: 'header__choices-item',
      itemSelectable: 'header__choices-item--selectable',
      itemDisabled: 'header__choices-item--disabled',
      itemChoice: 'header__choices-item--choice',
      group: 'header__choices-group',
      activeState: 'is-active',
      focusState: 'is-focused',
      openState: 'is-open',
      disabledState: 'is-disabled',
      highlightedState: 'is-highlighted',
      selectedState: 'is-selected'
    }
  });
};

defaultSelect();

const multiDefault = () => {
  const elements = document.querySelectorAll('.multi-default');
  elements.forEach(el => {
    const choices = new Choices(el, {
      searchEnabled: false,
      position: 'bottom',
      itemSelectText: '',
      shouldSort: false,
      allowHTML: true,
      classNames: {
        containerOuter: 'header__choices header__choices-two',
        containerInner: 'header__choices-inner',
        input: 'header__choices-input',
        inputCloned: 'header__choices-input--cloned',
        list: 'header__choices-list',
        listItems: 'header__choices-list--multiple',
        listSingle: 'header__choices-list--single',
        listDropdown: 'header__choices-list--dropdown',
        item: 'header__choices-item',
        itemSelectable: 'header__choices-item--selectable',
        itemDisabled: 'header__choices-item--disabled',
        itemChoice: 'header__choices-item--choice',
        group: 'header__choices-group',
        activeState: 'is-active',
        focusState: 'is-focused',
        openState: 'is-open',
        disabledState: 'is-disabled',
        highlightedState: 'is-highlighted',
        selectedState: 'is-selected'
      }
    });
  });
}

multiDefault();