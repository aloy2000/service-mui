import {Alert } from '@mui/material'

const AlertInfo = () =>{

    return (
        <>
            <Alert severity="error" sx={{my:3}}>
                Pour les <strong>interventions d'urgence</strong>, veuiller nous contacter directement via notre numéro mobile.
                Une autre façon de nous contacter en urgence et de compléter le formulaire de demande de devis 
                en cochant la case "Être rappelé immédiatement" et envoyer votre demande.
             </Alert>
             <Alert severity="warning" sx={{my:3}}>
                Les délais d'intervention peuvent varier selon votre localisation mais soyez-en sûr, nous interviendrons 
                dans les plus meilleurs des délais pour vous satisfaire à la réparation et à la vérification de vos équipements.
             </Alert>
        </>
    )

}

export default AlertInfo