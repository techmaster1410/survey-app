export const environment = {
  production: true
};

findActiveEnv(activeDC : String){
  if(activeDC == "M25"){
    setActive("M25");
  }
  elif (activeDC == "M31"){
    setActive("M31");
  }
  else{
    setActive("M1");
  }
}
    
