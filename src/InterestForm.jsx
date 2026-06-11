import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faForward, faMailForward, faPaperPlane, faRotateForward, faRotateRight, faSquareCheck, faWarning } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react"
import PrivacyPhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"
import { useEffect } from "react";

const PhoneInput = PrivacyPhoneInput.default || PrivacyPhoneInput;
export default function InterestForm() {
    
    const [confirmation, setConfirmation] = useState("")
    const [agreed, setAgreed] = useState(false)
    const [phone, setPhone] = useState("")

    const onSubmit = async (event) => {
        event.preventDefault()
        
        try {
            const formData = new FormData(event.target)
            formData.append("access_key", "a1f77337-9bf0-4fdb-9eed-9056d19564dc")

            const response = await fetch("https://api.web3forms.com/submit",
                {
                    method: "POST",
                    body: formData
                }
            )

            const returnedData = await response.json()
            setConfirmation(returnedData.success ? /*"Message ma sent"*/"Message sent" : "Message not sent. Please retry")
        } catch (error) {
            setConfirmation("No internet connection"/*"Message sent"*/)
        }
    }

    return(
        <form onSubmit={onSubmit}>
            <h1 className="blue-h">Hire Me</h1>
            <p className="blue-p">Need help with implementation? Reach out now</p>
            <div className="name-email">
                <label htmlFor="name" className="name">
                    <input type="text" name="name" className="inputs" id="name" placeholder="Name" autoComplete="name" required />
                </label>
                <label htmlFor="email" className="email">
                    <input type="email" name="email" className="inputs" id="email" placeholder="Email" autoComplete="email" required />
                </label>
            </div>
            <label htmlFor="message">
                <textarea name="message" id="message" className="message" placeholder="Message" autoComplete="message" required></textarea>
            </label>
            <label htmlFor="agree" className="agree">
                <input type="checkbox" name="agree" id="agree" checked={agreed} onChange={(e)=>{
                    setAgreed(e.target.checked)
                }} />
                <p className="blue-p">Solomon respond through Whatsapp</p>
            </label>
            {agreed &&
            <label htmlFor="phone" className="phone">
                <PhoneInput
                    country={"ng"}
                    value={phone}
                    onChange={(phone) => setPhone(phone)}
                    inputProps={{ name: "phone", id: "phone", required: true }}
                />
            </label>}
            {
            !confirmation ?
                <button type="submit" className="submit" id="submit">
                    Submit Interest<FontAwesomeIcon icon={faPaperPlane} />
                </button> :
                confirmation === "Message sent" ?
                    <div className="submit sent-status">{confirmation}<FontAwesomeIcon icon={faCheckCircle} style={{marginLeft: "5px"}} /></div> :
                    <div className="submit failed-status" onClick={onSubmit}><FontAwesomeIcon icon={faWarning} />{confirmation}<FontAwesomeIcon icon={faRotateRight} style={{color: "white", marginLeft: "10px"}} /></div>
                        //alert("not sent!!!")
            }
        </form>
    )
}