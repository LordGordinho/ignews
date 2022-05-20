import styles from './styles.module.scss';

interface SubscribeButton{
  priceId: string;
}
export function SubscribeButton({priceId}: SubscribeButton) {
  console.log(priceId)
  return (
    <button
      type="button"
      className={styles.subcribeButton}
    >
      Subscribe now
    </button>
  )
}