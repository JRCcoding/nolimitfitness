import { useForm, ValidationError } from '@formspree/react';
import { Button, TextField, Typography } from '@mui/material';

const ContactForm = () => {
  const [state, handleSubmit] = useForm('xrgwgrwz');

  if (state.succeeded) {
    return <Typography variant="body1">Thanks for contacting! I will get with you as soon as possible.</Typography>;
  }

  return (
    <form onSubmit={handleSubmit} style={{width: '75%', marginLeft: 'auto', marginRight: 'auto'}}>
      <TextField
        id="email"
        name="email"
        label="Email Address"
        type="email"
        variant="outlined"
        fullWidth
        style={{marginBottom: '5%'}}
      />
      <ValidationError prefix="Email" field="email" errors={state.errors}/>
      <TextField
        id="message"
        name="message"
        label="Message"
        multiline
        rows={4}
        variant="outlined"
        fullWidth
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <Button type="submit" variant="contained" disabled={state.submitting}>
        Submit
      </Button>
    </form>
  );
};

export default ContactForm;
