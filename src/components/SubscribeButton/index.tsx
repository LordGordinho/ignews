import { signIn, useSession } from 'next-auth/react';
import { api } from '../../services/api';
import { stripe } from '../../services/stripe';
import { getStripeJS } from '../../services/stripe-js';
import styles from './styles.module.scss';

interface SubscribeButton{
  priceId: string;
}
export function SubscribeButton({priceId}: SubscribeButton) {
  const { data: session } = useSession()

  const handleSubmit = async () => {
    if(!session){
      signIn('github');
      return;
    }

    try {
      const response = await api.post('/subscribe')

      const { sessionId } = response.data;

      const stripeJs = await getStripeJS()

      await stripeJs?.redirectToCheckout({ sessionId })

    } catch( e ) {
      alert(e)
    }
  }
  return (
    <button
      type="button"
      className={styles.subcribeButton}
      onClick={handleSubmit}
    >
      Subscribe now
    </button>
  )
}