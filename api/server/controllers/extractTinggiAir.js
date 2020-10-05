const extractTinggiAir = selector => {
  const lokasi_pengamatan = selector
    .find("td:nth-child(2)")
    .text()
    .trim();
  const sungai = selector
    .find("td:nth-child(3)")
    .text()
    .trim(); 
  const tinggi_air = selector
    .find("td:nth-child(4)")
    .text()
    .trim();  
  const tgl_data = selector
    .find("td:nth-child(6)")
    .text()
    .trim();
  const jam_data = selector
    .find("td:nth-child(7)")
    .text()
    .trim();    
  const status = selector
    .find("td:nth-child(8)")
    .find('img')
    .attr('src')         

/*   const suhu = selector
    .find("td:nth-child(3)")
    .text()
    .trim();
  const kelembapan = selector
    .find("td:nth-child(4)")
    .text()
    .trim();  */   

  /* const link = selector.attr("href").trim();

  const priceSelector = selector
    .find("div[class='col search_price_discount_combined responsive_secondrow']")
    .find("div[class='col search_price discounted responsive_secondrow']");

  const originalPrice = priceSelector
    .find("span > strike")
    .text()
    .trim();

  const pricesHtml = priceSelector.html().trim();
  const matched = pricesHtml.match(/(<br>(.+\s[0-9].+.\d+))/);

  const discountedPrice = matched[matched.length - 1];
 */
  return {
    lokasi_pengamatan,
    sungai,
    tinggi_air,
    tgl_data,
    jam_data,
    status,
/*     releaseDate,
    originalPrice,
    discountedPrice,
    link */
  };
};

export default extractTinggiAir