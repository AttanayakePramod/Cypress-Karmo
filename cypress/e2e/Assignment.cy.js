import TextBoxPage from "../projectobjects/TextBoxPage";
import CheckBoxPage from "../projectobjects/CheckBoxPage"
import RadioButtonPage from "../projectobjects/RadioButtonPage"

describe('Automation of Pages under Elements Section', function(){
 
  
  it('Should navigate to Text Box page', function() {
    const tp = new TextBoxPage()
    tp.visit()
    tp.fillName('pramod')
    tp.fillEmail('pramod@gmail.com')
    tp.fillCAdress('321/5,Seegiriya')
    tp.fillPAdress('305/5,Rukgahakotuwa,Menikdiwela')
    tp.submit()
  });


   it('Should navigate to Check Box page', function() {
  const tb =new CheckBoxPage()
  tb.visit()
   });
  
   it('Should navigate to Radio Button page', () => {
    const rp = new RadioButtonPage()
      rp.visit()
    

   });
});
