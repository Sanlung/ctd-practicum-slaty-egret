const Background = () => (
  <div>
    <video autoPlay muted loop className='bgvideo'>
      <source src='/images/waves.mp4' type='video/mp4' />
      <source src='/images/waves.webm' type='video/webm' />
      Your browser is not supported!
    </video>
  </div>
);

export default Background;
