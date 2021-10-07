let html =
  `
<div class="wrapper">
        <div class="btn bold">𝗕</div>
        <div class="btn italic">𝑰</div>
        <div class="btn underline">U̲</div>
        <div class="btn strikeThrough">S̶</div>
        <div class="btn cursive">𝓒</div>
        <div class="btn outline">𝔽</div>   
</div>    
`;
// injection of html
$("body").arrive(`[aria-label="Emoji"]`, function (e) {
  $(e)
    .parent()
    .append(html)
});

 const all_characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890𝗔𝗕𝗖𝗗𝗘𝗙𝗚𝗛𝗜𝗝𝗞𝗟𝗠𝗡𝗢𝗣𝗤𝗥𝗦𝗧𝗨𝗩𝗪𝗫𝗬𝗭𝗮𝗯𝗰𝗱𝗲𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘃𝘄𝘅𝘆𝘇𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴𝟵𝟬𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻𝓐𝓑𝓒𝓓𝓔𝓕𝓖𝓗𝓘𝓙𝓚𝓛𝓜𝓝𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡𝟘𝘼𝘽𝘾𝘿𝙀𝙁𝙂𝙃𝙄𝙅𝙆𝙇𝙈𝙉𝙊𝙋𝙌𝙍𝙎𝙏𝙐𝙑𝙒𝙓𝙔𝙕𝙖𝙗𝙘𝙙𝙚𝙛𝙜𝙝𝙞𝙟𝙠𝙡𝙢𝙣𝙤𝙥𝙦𝙧𝙨𝙩𝙪𝙫𝙬𝙭𝙮𝙯"


const normal_character = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890"
const normal_character_array = [...normal_character]

const all_characters_array = [...all_characters]

// Button Click will perform following function.
const textFormatOption = (type) => {
  restoreSelection(selectedObj);
  console.log("dan1", selectedObj,selectedObj.toString());
  if ($(`[aria-label="Post"]`).length) {
    var stringSelected = document.getSelection().toString();
    var tempArray = [...stringSelected]
    if (stringSelected) {
      var reformatedText
      console.log(stringSelected)
      reformatedText = ""
      // Conversion of text
      switch(type) {
        case 0:
          reformatedText = buttonTrigger([...all_characters],[...stringSelected],type,120211,120205,120764)
          break;
        case 1:
          reformatedText = buttonTrigger([...all_characters],[...stringSelected],type,120263,120257,0)
          break;
        case 2:
          reformatedText = strikeThrough(tempArray,818); // Underline
          break;
        case 3:
          reformatedText = strikeThrough(tempArray,822); // Strike Through
          break;
        case 4:
          reformatedText = buttonTrigger([...all_characters],[...stringSelected],type,119951,119945,0)
          break;
        case 5:
            reformatedText = buttonTrigger([...all_characters],[...stringSelected],type,120055,120049,120744)
            break;  
        default:
          for (let i=0; i < tempArray.length; i++){
            reformatedText += specialToNormal([...all_characters],tempArray[i],type);
          }    
      }
      console.log(reformatedText,"reformation done");
      
      // Replacing the selected text with desired text
      const blob = new Blob([reformatedText], {
        type: "text/plain",
      });
      let cpData = [
        new ClipboardItem({
          "text/plain": blob,
        }),
      ];

      navigator.clipboard.write(cpData).then(
        function () {
          restoreSelection(selectedObj);
          setTimeout(() => {
            console.log("pasting");
            document.execCommand("paste");
          }, 500);
        },
        function (error) {
          console.error("Unable to paste the data. Error:");
          console.log(error);
        }
      );
    }
  }
};

// Triggerin the button will call the required function
function buttonTrigger(characterlist,templist,type,diff1,diff2,diff3){
    var ntstext = "" ;
    for (let i=0; i < templist.length; i++){
        ntstext += normalToSpecial(specialToNormal(characterlist,templist[i],type),diff1,diff2,diff3,type);
      }
    return ntstext
}

// It will Convert the Styled text or normal text to its normal counterpart except the style which is clicked for example if a bold button is clicked then it will replace all styled or non styled character to its normal counterpart but will do nothing to any bold character
function specialToNormal(inputArray,element,type) {
  let diff;
  let alphabet = "";
  let alpha_index = "";
  if(inputArray.includes(element)){
    alpha_index = inputArray.indexOf(element);
    
    if(alpha_index < 62){
      alphabet = String.fromCodePoint(inputArray[alpha_index].codePointAt(0) - 0);
      return alphabet
      // converting Bold to Normal
    }else if (alpha_index >= 62 && alpha_index < 88){
      if(type === 0 || type === 1){
        diff = 0;
      }
      // else if(type === 1){
      //   diff = 120315
      // }
      else{
        diff = 120211
      }
      alphabet = String.fromCodePoint(inputArray[alpha_index].codePointAt(0) - diff);
      console.log(type,alphabet)
      return alphabet
    }else if(alpha_index >= 88 && alpha_index < 114){
      if(type === 0 || type === 1){
        diff = 0;
      }
      // else if(type === 1){
      //   diff = 120309
      // }
      else{
        diff = 120205
      }
      alphabet = String.fromCodePoint(inputArray[alpha_index].codePointAt(0) - diff);
      return alphabet
    }else if(alpha_index >= 114 && alpha_index < 124){
      if(type === 0){
        diff = 0;
      }else{
        diff = 120764
      }
      alphabet = String.fromCodePoint(inputArray[alpha_index].codePointAt(0) - diff);
      return alphabet
      // converting Italic to Normal
    }else if(alpha_index >= 124 && alpha_index < 150){
      if(type === 1 || type === 0){
        diff = 0;
      }
      // else if(type === 0){
      //   diff = 120315
      // }
      else{
        diff = 120263;
      }
      alphabet = String.fromCodePoint(inputArray[alpha_index].codePointAt(0) - diff);
      return alphabet
    }else if(alpha_index >= 150 && alpha_index < 176){
      if(type === 1 || type === 0){
        diff = 0;
      }
      // else if(type === 0){
      //   diff = 120315
      // }
      else{
        diff = 120257;
      }
      alphabet = String.fromCodePoint(inputArray[alpha_index].codePointAt(0) - diff);
      return alphabet
      // converting Cursive to Normal
    }else if(alpha_index >= 176 && alpha_index < 202){
      if(type === 4){
        diff = 0;
      }else{
        diff = 119951;
      }
      alphabet = String.fromCodePoint(inputArray[alpha_index].codePointAt(0) - diff);
      return alphabet
    }else if(alpha_index >= 202 && alpha_index < 228){
      if(type === 4){
        diff = 0;
      }else{
        diff = 119945;
      }
      alphabet = String.fromCodePoint(inputArray[alpha_index].codePointAt(0) - diff);
      return alphabet 
      // Outline to regular text  
    }else if(alpha_index >= 228 && alpha_index < 254){
      if(type === 5){
        diff = 0;
      }else{
          diff = 120055;
      }
      alphabet = String.fromCodePoint(inputArray[alpha_index].codePointAt(0) - diff);
      return alphabet    
    }else if(alpha_index >= 254 && alpha_index < 280){
      if(type === 5){
        diff = 0;
      }else{
        diff = 120049;
      }
      alphabet = String.fromCodePoint(inputArray[alpha_index].codePointAt(0) - diff);
      return alphabet    
    }else if(alpha_index >= 280 && alpha_index < 290){
      if(type === 5){
        diff = 0;
      }else{
        diff = 120744;
      }
      alphabet = String.fromCodePoint(inputArray[alpha_index].codePointAt(0) - diff);
      return alphabet    
      // Small Capital to normal
    }else if(alpha_index >= 290 && alpha_index < 316){
      if(type !== 0 && type !== 1){
        diff = 120315;
      }else{
        diff = 0;
      }
      alphabet = String.fromCodePoint(inputArray[alpha_index].codePointAt(0) - diff);
      return alphabet    
    }else if(alpha_index >= 316 && alpha_index < 342){
      if(type !== 0 && type !== 1){
        diff = 120309;
      }else{
        diff = 0;
      }
      alphabet = String.fromCodePoint(inputArray[alpha_index].codePointAt(0) - diff);
      return alphabet    
    }
  }else{
    alphabet = element
    return alphabet
  }
}
 
// it will convert all the special character to STyled one
function normalToSpecial(norAlpha,diff1,diff2,diff3,type){
  let alphabet = "";
  let alpha_index = "";
  var char_index = all_characters_array.indexOf(norAlpha);
  //   alpha_index = normal_character_array.indexOf(norAlpha);
  if(all_characters_array.includes(norAlpha)){
    if(char_index < 26){
      return String.fromCodePoint(norAlpha.codePointAt(0) + diff1);
    }else if(char_index >= 26 && char_index < 52){
      return String.fromCodePoint(norAlpha.codePointAt(0) + diff2);
    }else if(char_index >= 52 && char_index < 62){
      return String.fromCodePoint(norAlpha.codePointAt(0) + diff3);
    }else if(char_index >= 62 && char_index < 88 && type === 1){
      return String.fromCodePoint(norAlpha.codePointAt(0) + 104);
    }else if(char_index >= 88 && char_index < 114 && type === 1){
      return String.fromCodePoint(norAlpha.codePointAt(0) + 104);
    }else if(char_index >= 124 && char_index < 150 && type === 0){
      return String.fromCodePoint(norAlpha.codePointAt(0) + 52);
    }else if(char_index >= 150 && char_index < 176 && type === 0){
      return String.fromCodePoint(norAlpha.codePointAt(0) + 52);
    }else if(char_index >= 290 && char_index < 316 && type === 1){
      return String.fromCodePoint(norAlpha.codePointAt(0) - 104);
    }else if(char_index >= 316 && char_index < 342 && type === 1){
      return String.fromCodePoint(norAlpha.codePointAt(0) - 104);
    }else if(char_index >= 290 && char_index < 316 && type === 0){
      return String.fromCodePoint(norAlpha.codePointAt(0) - 52);
    }else if(char_index >= 316 && char_index < 342 && type === 0){
      return String.fromCodePoint(norAlpha.codePointAt(0) - 52);
    }else{
      return specialToNormal(all_characters_array,norAlpha,9)
    }
  }else{
    return specialToNormal(all_characters_array,norAlpha,9)
  }
}

// For Underline and Strike Through
function strikeThrough(text,charCode){
  var iterator = 0;
  while(iterator < text.length){
    if (text[iterator] != String.fromCharCode(charCode)){
      if(text[iterator+1] != String.fromCharCode(charCode)){
          text.splice(iterator+1,0,String.fromCharCode(charCode))
          iterator = iterator+2;
      }else{
          text.splice(iterator+1,1);
          iterator = iterator+1;
      }
    }else{
      text.splice(iterator,1)
      iterator = iterator+0;
    }
  }
  var ntext = text.join("");
  return ntext
}

// Triggering the button
$(document).on("click", ".bold", () => {
  textFormatOption(0);
});
$(document).on("click", ".italic", () => {
  textFormatOption(1);
});
$(document).on("click", ".underline", () => {
  textFormatOption(2);
});
$(document).on("click", ".strikeThrough", () => {
  textFormatOption(3);
});
$(document).on("click", ".cursive", () => {
  textFormatOption(4);
});
$(document).on("click", ".outline", () => {
  textFormatOption(5);
});


//  Function to save selection
function saveSelection() {
  if (window.getSelection) {
    sel = window.getSelection();
    if (sel.getRangeAt && sel.rangeCount) {
      return sel.getRangeAt(0);
    }
  } else if (document.selection && document.selection.createRange) {
    return document.selection.createRange();
  }
  return null;
}

// Before pasting it will make sure the latest Selection
function restoreSelection(range) {
  if (range) {
    if (window.getSelection) {
      sel = window.getSelection(); 
      sel.removeAllRanges();
      sel.addRange(range);
    } else if (document.selection && range.select) {
      range.select();
    }
  }
}

var selectedObj = "";

// It will Monitor selection change if there is any then save it.
$(document).on("selectionchange", function (e) {
  
  if ($(`[aria-label="Post"]`).length) {
    document.onmouseup = function()
    {
      if(document.getSelection().toString().length !== 0 && document.getSelection().toString() !="" ) 
      {
        document.querySelector(".wrapper").style.visibility = "visible";
      }else {
        document.querySelector(".wrapper").style.visibility = "hidden";
      }
    }
    var stringSelected = window.getSelection().toString();
    if (stringSelected) {
      selectedObj = saveSelection();
    }
  }
});
