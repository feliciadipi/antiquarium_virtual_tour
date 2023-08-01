Antiquarium Virtual Tour Guide
Author: Felicia DiPietro, August 2023

Project Motivation/Goals
  The archeological museum in Murlo houses a large number of artifacts recovered from Poggio Civitate, and these items 
  are currently accompanied by traditional printed museum boards, which are inherently static. However, coming from 
  an ongoing excavation, the museum's collection of items is uniquely alive––growing and changing each year.
  It therefore seems fitting that the means of communication in the museum be similarly dynamic. A web-based
  guide to the museum's exhibits and contents provides an easier way to maintain textual resources in the museum,
  while also providing another layer of accessibility for visitors through compatability with screen readers and 
  support for translation into various languages. This Virutal Tour Guide seeks to enhance visitor experiences 
  in the museum by providing digital resources about the collection, available by QR codes at several checkpoints 
  throughout the museum. These texts, written by Director Tony Tuck, offer insight into the archeological process
  and describe how finding these artifacts has impacted our understanding of life at this Etruscan settlement. 
  Ideally, this resource will continue evolve with our collective understanding of life at Poggio Civitate.

Languages/Frameworks
  HTML/Bootstrap
    This project uses HTML with Bootstrap 5.3 (https://getbootstrap.com/). Each page is designed to be responsive 
    with the help of Bootstrap's Grid system (https://getbootstrap.com/docs/5.3/layout/grid/).
  CSS (styles.css)
    Used only for basic style overrides, such as the navbar color and text decoration on links.
  Javascript (render.js)
    Handles rendering for all HTML pages, which are implemented with a common set of DOM element id's. Includes event 
    listeners that support translating the page between Italian/English. In this future, this module could easily 
    be updated to support additional languages.

Ideas for the Future
  During the development process, I imagined several different directions this project could go in. One idea that might 
  be interesting in the future would be to reimagine this as a more robust and dynamic, full-stack web application that
  fetches from the OpenContext API to support different features. This wasn't realistic given the timeline for this summer's 
  excavation season, but it might be fun to explore in future years. It would demand more extensive resources to support 
  a server-side set of operations.