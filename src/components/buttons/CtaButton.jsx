import './CtaButton.css';

export default function CtaButton(props) {

    return (
        <div className='cta-button' onClick={props.onClick}>
            {props.nameButton}
        </div>
    );
    
}