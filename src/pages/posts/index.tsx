import Head from 'next/head';
import styles from './styles.module.scss'

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Lorem ipsum dolor sit amet</strong>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel pellentesque nisl. Suspendisse ac ultrices magna. In nec imperdiet diam. Donec rhoncus, mauris quis auctor aliquet, augue elit sodales velit, et tincidunt orci libero in lorem. Etiam ante lacus, volutpat et erat vitae, blandit dignissim mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl quam, vestibulum ut dignissim a, pulvinar at lectus. Integer commodo diam eget sapien tristique eleifend. Mauris vestibulum odio a nunc gravida, eget gravida dui dapibus. Praesent vitae enim est. Vivamus condimentum iaculis purus quis maximus. Ut ornare leo at nibh malesuada, in tincidunt est commodo. Integer ac magna pharetra, aliquet dolor sed, venenatis nunc. Nunc vitae gravida est. Nulla nunc odio, efficitur tempus suscipit at, consectetur feugiat lacus. </p>
          </a>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Lorem ipsum dolor sit amet</strong>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel pellentesque nisl. Suspendisse ac ultrices magna. In nec imperdiet diam. Donec rhoncus, mauris quis auctor aliquet, augue elit sodales velit, et tincidunt orci libero in lorem. Etiam ante lacus, volutpat et erat vitae, blandit dignissim mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl quam, vestibulum ut dignissim a, pulvinar at lectus. Integer commodo diam eget sapien tristique eleifend. Mauris vestibulum odio a nunc gravida, eget gravida dui dapibus. Praesent vitae enim est. Vivamus condimentum iaculis purus quis maximus. Ut ornare leo at nibh malesuada, in tincidunt est commodo. Integer ac magna pharetra, aliquet dolor sed, venenatis nunc. Nunc vitae gravida est. Nulla nunc odio, efficitur tempus suscipit at, consectetur feugiat lacus. </p>
          </a>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Lorem ipsum dolor sit amet</strong>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel pellentesque nisl. Suspendisse ac ultrices magna. In nec imperdiet diam. Donec rhoncus, mauris quis auctor aliquet, augue elit sodales velit, et tincidunt orci libero in lorem. Etiam ante lacus, volutpat et erat vitae, blandit dignissim mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl quam, vestibulum ut dignissim a, pulvinar at lectus. Integer commodo diam eget sapien tristique eleifend. Mauris vestibulum odio a nunc gravida, eget gravida dui dapibus. Praesent vitae enim est. Vivamus condimentum iaculis purus quis maximus. Ut ornare leo at nibh malesuada, in tincidunt est commodo. Integer ac magna pharetra, aliquet dolor sed, venenatis nunc. Nunc vitae gravida est. Nulla nunc odio, efficitur tempus suscipit at, consectetur feugiat lacus. </p>
          </a>
        </div>
      </main>
    </>
  );
}