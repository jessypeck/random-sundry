import React from 'react';
import NavBar from './../NavBar.jsx';
import IconButton from './../IconButton.jsx';
import faHome from '@fortawesome/fontawesome-pro-light/faHome';
import faBook from '@fortawesome/fontawesome-pro-light/faBookOpen';

const fillColor = '#fff';
const image404 = <svg xmlns="http://www.w3.org/2000/svg" width="60%" viewBox="0 0 336.83 184.91"><desc>twenty-sided die with a 1 facing up</desc><g id="072b597d-95a9-48eb-9412-5111339af94b" data-name="Layer 5"><path d="M135.18,225.77s51.29-2,80.82,3c4.12.7,81.36-29.74,86-40.06,3.43-7.63,13.33-57.78,3-73.69-8.85-13.63-77.16-59.21-86.09-60S135.18,225.77,135.18,225.77Z" transform="translate(-67.74 -45.6)" opacity="0.5"/><text transform="translate(220.54 30.8)" fontSize="36" fontFamily="RobotoSlab-Bold, Roboto Slab" fontWeight="700">Uh-<tspan x="64.41" y="0" letterSpacing="-0.01em">o</tspan><tspan x="84.23" y="0">h.</tspan></text></g><g id="70ebb4a1-b6d6-471b-a44f-6a5a220c6aa8" data-name="Layer 3"><polygon points="53.38 12.42 150.05 12.47 198.33 96.22 149.95 179.91 53.29 179.85 5 96.11 53.38 12.42" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="10"/><path d="M188,185.45a4.84,4.84,0,0,1-2.45-.67l-61.48-35.54a4.92,4.92,0,0,1,0-8.52l61.52-35.47a4.84,4.84,0,0,1,2.44-.67,5,5,0,0,1,3.44,1.4,4.84,4.84,0,0,1,1.49,3.53l0,71a4.94,4.94,0,0,1-4.93,4.92Z" transform="translate(-67.74 -45.6)" fill={fillColor}/><path d="M188,107.08a2.5,2.5,0,0,1,1.71.7,2.3,2.3,0,0,1,.72,1.73l0,71A2.43,2.43,0,0,1,188,183a2.37,2.37,0,0,1-1.2-.34l-61.48-35.54a2.42,2.42,0,0,1,0-4.19l61.52-35.47a2.37,2.37,0,0,1,1.2-.33m0-5a7.36,7.36,0,0,0-3.69,1l-61.52,35.47a7.42,7.42,0,0,0,0,12.85l61.48,35.54a7.4,7.4,0,0,0,11.13-6.42l0-71a7.43,7.43,0,0,0-7.43-7.43Z" transform="translate(-67.74 -45.6)"/><path d="M127.24,219.61a4.92,4.92,0,0,1-4.88-4.36l-6.48-55.91a4.82,4.82,0,0,1,1.18-3.81,5,5,0,0,1,3.71-1.69,4.85,4.85,0,0,1,2.45.68l58.17,33.62a4.92,4.92,0,0,1-.51,8.77l-51.68,22.28A4.89,4.89,0,0,1,127.24,219.61Z" transform="translate(-67.74 -45.6)" fill={fillColor}/><path d="M120.77,156.35a2.38,2.38,0,0,1,1.2.34l58.16,33.62a2.42,2.42,0,0,1-.25,4.31L128.2,216.91a2.4,2.4,0,0,1-3.36-1.94l-6.48-55.91a2.29,2.29,0,0,1,.57-1.86,2.52,2.52,0,0,1,1.84-.85m0-5a7.43,7.43,0,0,0-7.38,8.29l6.48,55.91a7.4,7.4,0,0,0,10.3,6l51.68-22.28a7.42,7.42,0,0,0,.78-13.23l-58.17-33.62a7.36,7.36,0,0,0-3.7-1Z" transform="translate(-67.74 -45.6)"/><path d="M111.9,201.45a3.1,3.1,0,0,1-2.79-1.68L80.47,150.11a3.33,3.33,0,0,1,2.86-5h.31l23.1,1.94a3.34,3.34,0,0,1,3,2.93l5.53,47.72a3.14,3.14,0,0,1-.74,2.56,3.59,3.59,0,0,1-2.65,1.17Z" transform="translate(-67.74 -45.6)" fill={fillColor}/><path d="M83.33,147.62h.1l23.1,1.94a.83.83,0,0,1,.75.73L112.81,198c0,.42-.07.54-.13.61a1.12,1.12,0,0,1-.79.33c-.25,0-.42-.07-.63-.43L82.63,148.86a.77.77,0,0,1,0-.82.78.78,0,0,1,.69-.42m0-5a5.83,5.83,0,0,0-5,8.74L106.94,201a5.62,5.62,0,0,0,5,2.93,5.8,5.8,0,0,0,5.88-6.52l-5.53-47.72a5.83,5.83,0,0,0-5.3-5.14l-23.1-1.94-.51,0Z" transform="translate(-67.74 -45.6)"/><path d="M149.23,223a3.33,3.33,0,0,1-1.32-6.39l44.11-19a3.33,3.33,0,0,1,4.05,1.16l13.21,19.05a3.33,3.33,0,0,1-2.74,5.23Z" transform="translate(-67.74 -45.6)" fill={fillColor}/><path d="M193.34,199.79a.84.84,0,0,1,.68.36l13.21,19.05a.83.83,0,0,1-.68,1.3l-57.32,0a.83.83,0,0,1-.33-1.59l44.11-19a.82.82,0,0,1,.33-.07m0-5a5.82,5.82,0,0,0-2.31.48l-44.11,19a5.83,5.83,0,0,0,2.3,11.18l57.32,0h0a5.83,5.83,0,0,0,4.79-9.15L198.14,197.3a5.83,5.83,0,0,0-4.79-2.51Z" transform="translate(-67.74 -45.6)"/><path d="M106.52,142h-.28l-24.13-2a3.33,3.33,0,0,1-2.6-5l30-51.83a3.1,3.1,0,0,1,2.79-1.68,3.59,3.59,0,0,1,2.64,1.16,3.15,3.15,0,0,1,.75,2.55l-5.84,53.86A3.32,3.32,0,0,1,106.52,142Z" transform="translate(-67.74 -45.6)" fill={fillColor}/><path d="M112.26,84h0a1.12,1.12,0,0,1,.78.33c.06.07.17.19.13.61l-5.84,53.86a.83.83,0,0,1-.82.74h-.08l-24.13-2a.83.83,0,0,1-.65-1.24l30-51.83c.21-.36.38-.43.63-.43m0-5a5.62,5.62,0,0,0-5,2.93l-30,51.83a5.83,5.83,0,0,0,4.56,8.73l24.13,2,.49,0a5.83,5.83,0,0,0,5.79-5.2l5.84-53.86A5.8,5.8,0,0,0,112.26,79Z" transform="translate(-67.74 -45.6)"/><path d="M217.24,218a3.28,3.28,0,0,1-2.73-1.43l-13.8-19.9a3.31,3.31,0,0,1,.77-4.59l43.76-31.93a3.28,3.28,0,0,1,2-.68,3.5,3.5,0,0,1,3,1.78,3.1,3.1,0,0,1-.06,3.26l-30,51.83a3.3,3.3,0,0,1-2.89,1.66Z" transform="translate(-67.74 -45.6)" fill={fillColor}/><path d="M247.2,161.92a1,1,0,0,1,.79.53c.12.21.15.4-.06.76L218,215a.8.8,0,0,1-.72.41.77.77,0,0,1-.68-.36l-13.8-19.9a.82.82,0,0,1,.19-1.14l43.76-31.93a.87.87,0,0,1,.48-.2m0-5a5.76,5.76,0,0,0-3.43,1.16L200,190a5.83,5.83,0,0,0-1.35,8l13.8,19.9a5.83,5.83,0,0,0,9.84-.4l30-51.83a5.86,5.86,0,0,0-5.06-8.79Z" transform="translate(-67.74 -45.6)"/><path d="M203.58,182.49a4.9,4.9,0,0,1-4.94-4.89l-.55-67.28a4.78,4.78,0,0,1,1.4-3.48,5,5,0,0,1,3.54-1.49,4.82,4.82,0,0,1,2.63.79L255.51,138a4.92,4.92,0,0,1,.22,8.14l-49.31,35.4A4.85,4.85,0,0,1,203.58,182.49Z" transform="translate(-67.74 -45.6)" fill={fillColor}/><path d="M203,107.86a2.36,2.36,0,0,1,1.28.39l49.86,31.88a2.42,2.42,0,0,1,.11,4L205,179.53a2.34,2.34,0,0,1-1.38.47,2.42,2.42,0,0,1-2.44-2.41l-.55-67.28a2.3,2.3,0,0,1,.67-1.7,2.54,2.54,0,0,1,1.76-.75m0-5a7.43,7.43,0,0,0-7.43,7.49l.55,67.28a7.42,7.42,0,0,0,7.44,7.37,7.32,7.32,0,0,0,4.3-1.4l49.31-35.39a7.42,7.42,0,0,0-.33-12.27L207,104a7.34,7.34,0,0,0-4-1.18Z" transform="translate(-67.74 -45.6)"/><path d="M120.65,136.19a5,5,0,0,1-3.7-1.67,4.82,4.82,0,0,1-1.2-3.79l6.68-61.65a4.92,4.92,0,0,1,4.9-4.39,4.86,4.86,0,0,1,2.26.56l52.72,27.4a4.92,4.92,0,0,1,.19,8.62l-59.4,34.25A4.85,4.85,0,0,1,120.65,136.19Z" transform="translate(-67.74 -45.6)" fill={fillColor}/><path d="M127.33,67.18a2.38,2.38,0,0,1,1.11.28l52.72,27.4a2.42,2.42,0,0,1,.09,4.24l-59.4,34.25a2.38,2.38,0,0,1-1.2.34,2.52,2.52,0,0,1-1.84-.84,2.29,2.29,0,0,1-.57-1.85l6.68-61.65a2.42,2.42,0,0,1,2.41-2.16m0-5a7.42,7.42,0,0,0-7.38,6.62l-6.68,61.65a7.4,7.4,0,0,0,11.08,7.22l59.4-34.25a7.42,7.42,0,0,0-.28-13L130.74,63a7.37,7.37,0,0,0-3.41-.84Z" transform="translate(-67.74 -45.6)"/><path d="M249.1,127.41a3.33,3.33,0,0,1-1.8-.56L201.51,97.57a3.32,3.32,0,0,1-1.09-4.47l14.47-25a3.25,3.25,0,0,1,2.88-1.66,3.29,3.29,0,0,1,2.88,1.67L252,122.38a3.15,3.15,0,0,1,0,3.27,3.47,3.47,0,0,1-2.92,1.76Z" transform="translate(-67.74 -45.6)" fill={fillColor}/><path d="M217.78,68.9a.78.78,0,0,1,.72.41l31.31,54.31a.66.66,0,0,1,0,.77,1,1,0,0,1-.76.51.89.89,0,0,1-.46-.17L202.86,95.46a.83.83,0,0,1-.27-1.11l14.47-25a.78.78,0,0,1,.72-.41m0-5a5.77,5.77,0,0,0-5,2.91l-14.47,25a5.83,5.83,0,0,0,1.91,7.83L246,128.95a5.81,5.81,0,0,0,8.19-7.82L222.83,66.82a5.78,5.78,0,0,0-5-2.92Z" transform="translate(-67.74 -45.6)"/><path d="M193.21,92.26a3.29,3.29,0,0,1-1.53-.38L143.46,66.81A3.33,3.33,0,0,1,145,60.53l62.69,0a3.33,3.33,0,0,1,2.88,5l-14.47,25A3.34,3.34,0,0,1,193.21,92.26Z" transform="translate(-67.74 -45.6)" fill={fillColor}/><path d="M145,63l62.69,0a.83.83,0,0,1,.72,1.24l-14.47,25a.83.83,0,0,1-.72.42.8.8,0,0,1-.38-.09L144.61,64.6A.83.83,0,0,1,145,63h0m0-5a5.83,5.83,0,0,0-2.69,11L190.52,94.1a5.83,5.83,0,0,0,7.74-2.25l14.47-25a5.83,5.83,0,0,0-5-8.75L145,58Z" transform="translate(-67.74 -45.6)"/><text transform="matrix(0.87, 0.5, -0.5, 0.87, 88.08, 104.46)" fontSize="42.07" fontFamily="RobotoSlab-Bold, Roboto Slab" fontWeight="700">1</text></g></svg>;

const PageNotFound = (props) => (
    <div className='pageNotFoundWrapper'>
        <div className='centerImage'>
            {image404}
        </div>
        <div className='center404Text'>
            <p>Sorry, looks like we can't find this page!</p>
            <p>Here's some other places you can go:</p>
        </div>
        <div className="pageNotFoundButtons">
            <IconButton label='Home' url='/' icon={faHome} />
            <IconButton label='Browse' url='ruins' icon={faBook} />
        </div>  

    </div>
)

export default PageNotFound;