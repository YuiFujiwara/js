'use script';

{
  let i =0;
  const showTime = () => {
    console.log(new Date());
    i++;
    if (i > 2){
      clearInterval(timeId);
    }
  };

  let timeId = setInterval(showTime,1000);

}
