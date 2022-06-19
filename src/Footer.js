import { React } from 'react';
import './footer.css';
function Footer() {
    return (
        <div>
            <div className='footer'>


                <div className='col1'>
                    <h4><u>CUSTOMER SERVICE</u></h4>
                    <p>HELP / FAQs</p>
                    <p>HOW DO I BUY?</p>
                    <p>BUYING GUIDE</p>
                    <p>TRACK ORDER</p>
                    <p>HOW DO I PAY?</p>

                </div>
                <div className='col2'>
                    <h4><u>STORE AND SITES</u></h4>
                    <p>ABOUT US</p>
                    <p>CONTACT US</p>
                    <p>CORPORATE SITE</p>
                    <p>CAREERS</p>
                    <p>STORE LOCATOR</p>
                </div>
                <div className='col3'>
                    <h4><u>POLICY</u></h4>
                    <p>TERM OF USE</p>
                    <p>PRIVACY</p>
                    <p>DELIVERY POLICY</p>
                    <p>EXCHANGES & RETURNS</p>
                    <p>CANCELLATION POLICY</p>
                </div>

            </div>

        </div>
    )
}
export default Footer;