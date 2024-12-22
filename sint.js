xReadMore.Instances[elementIdentifier].options.afterToggle = function( trigger, element, expanded ) {
  if (expanded) {
    // Perform actions when the element is expanded
    console.log('Element expanded!');
  } else {
    // Perform actions when the element is collapsed
    console.log('Element collapsed!');
  }
};
