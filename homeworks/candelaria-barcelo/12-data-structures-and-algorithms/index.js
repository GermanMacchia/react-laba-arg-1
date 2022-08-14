requirejs(['./MOCK_DATA'], function (importedData) {
  const orderedData = importedData.data.sort((a, b) => (a.sku > b.sku ? 1 : b.sku > a.sku ? -1 : 0));
  console.log(orderedData[0].sku < orderedData[1].sku);
  const output = document.getElementById('output');

  const straightClickHandler = () => {
    let input = document.getElementById('searchbox').value.toLowerCase();
    if (!input) return;
    const result = orderedData.filter((item) => item.sku === input)[0];
    output.innerText = `Name: ${result.name} \n
    Pack: ${result.pack} \n
    Price: ${result.price} \n
    Sku: ${result.sku}`;
  };

  const binaryClickHandler = () => {
    // let input = document.getElementById('searchbox').value.toLowerCase();
    // if (!input) return;
    // let middlePoint = orderedData[Math.floor(orderedData.length / 2)];
    // if (input < middlePoint.sku) {
    // } else if (input > middlePoint.sku) {
    // } else if (input === middlePoint.sku) {
    //     return
    // }
  };

  document.getElementById('straight-search-btn').addEventListener('click', straightClickHandler);
  document.getElementById('binary-search-btn').addEventListener('click', binaryClickHandler);
});
