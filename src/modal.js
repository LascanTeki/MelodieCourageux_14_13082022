import './modal.css'

export function Modal(props) {

    function close(){
        document.getElementById('background-modal').style.display= "none";
    }

    return (
        <div id='background-modal'>
            <div className='container-modal'>
            {props.children}
            <div className='close-modal' onClick={close}>x</div>
            </div>
        </div>
    )
}

export function open(){
    document.getElementById('background-modal').style.display = "flex";
}