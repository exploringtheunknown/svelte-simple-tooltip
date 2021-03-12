  const getTitleTemplate = (options) => {

    return `
      <div class="title-wrapper"
      style="
        position: relative;
        width: 100%;
        margin: 0;
        padding: 0.4rem;
        margin-top: -0.2rem;
      ">
          <span>${options.title.toUpperCase()}</span> 
      </div>
    `
  }
  
  const getTemplate = (options) => {
    let top = '.4rem';
    let right = '0';
    let bottom = '0';
    let left = '.2rem';

    if(options.position) {
      top = options.position.top;
      right = options.position.right;
      bottom = options.position.bottom;
      left = options.position.left;
    }

    return `
    <div class="tooltip-outer-wrapper" style="
      opacity: ${options.opacity};
      position: absolute;
      margin: ${top} ${right} ${bottom} ${left};
      padding: 0;
      font-size: 0.7rem;
      transition: all 0.5s;
      max-width: 16rem;
      height:auto;
      clear : both;
    ">
      <div class="tooltip-inner-wrapper">
          <div class="body" style="
            position: relative;
            width: 100%;
            margin: 0;
            padding: 0.4rem;
            margin-top: -0.2rem; 
          ">
              ${options.body}
          </div>
      </div>
    </div>
    `
  }
  
  const getOuterWrapperNode = (wrappingElement) => {
    for (var i = 0; i < wrappingElement.childNodes.length; i++) {
        if (wrappingElement.childNodes[i] && 
          wrappingElement.childNodes[i].classList && 
          wrappingElement.childNodes[i].classList.contains("tooltip-outer-wrapper")) {
          return wrappingElement.childNodes[i];
        }        
    }
    return null;
  }
  
  function tooltip(node, options) {
  
      let wrappingElement;
      const addElement = () => {
        if(wrappingElement != null) {
          wrappingElement.style.opacity = options.opacity;
          wrappingElement.style.transition = 'all 0.3s ease 0.1s';
          return;
        }
  
        wrappingElement = document.createElement("div");
        wrappingElement.innerHTML = getTemplate(options);
  
        let tooltipOuterWrapperElement = getOuterWrapperNode(wrappingElement);
  
        if(options.title != null) {
          let titleElement = document.createElement("div");
          titleElement.innerHTML = getTitleTemplate(options);
          tooltipOuterWrapperElement.insertBefore(titleElement, tooltipOuterWrapperElement.firstChild);
  
          if(options.titleClassList && options.titleClassList.length > 0) {
            titleElement.className += " " + options.titleClassList;
          }
        }
  
        if(options.bodyClassList && options.bodyClassList.length > 0) {
          tooltipOuterWrapperElement.className += " " + options.bodyClassList;
        }
  
        wrappingElement.style.transition = 'all 0.3s ease 0.1s';
        node.appendChild(wrappingElement);
      }
  
      const removeElement = () => {
        wrappingElement.style.opacity = 0;
      }
  
      const handleMouseover = () => {
        addElement();
      }
  
      const handleMouseout = () => {
        removeElement();
      }
  
      node.addEventListener('mouseover', handleMouseover);
      node.addEventListener('mouseout', handleMouseout);
  
      return {
        destroy() {
          node.removeEventListener('mouseover', handleMouseover);
          node.removeEventListener('mouseout', handleMouseout);
          
        }
      };
  }
  
  export default tooltip;