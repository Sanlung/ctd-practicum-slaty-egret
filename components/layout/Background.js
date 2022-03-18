const Background = () => (
  <>
    <video autoPlay muted loop className='bgvideo'>
      <source src='/images/fluid.mp4' type='video/mp4' />
      <source src='/images/fluid.webm' type='video/webm' />
      Your browser is not supported!
    </video>
  </>
);

export default Background;
