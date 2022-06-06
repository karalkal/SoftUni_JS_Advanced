function attachEventsListeners() {
    const valuesInMeters = {
        km: 1000,
        m: 1,
        cm: .01,
        mm: .001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254,
    }

    let inputOptionField = document.getElementById('inputUnits')
    let outputOptionField = document.getElementById('outputUnits')

    let inputField = document.getElementById('inputDistance')
    let outputField = document.getElementById('outputDistance')

    document.getElementById('convert').addEventListener('click', convertUnits)

    function convertUnits(event) {
        let inMeters = 0;
        let valueToConvert = Number(inputField.value)
        let inputUnits = inputOptionField.value
        let outputUnits = outputOptionField.value

        for (let inUnit in valuesInMeters) {
            if (inUnit === inputUnits) {
                inMeters = valueToConvert * valuesInMeters[inUnit];
                // console.log(inMeters);
                break
            }
        }

        let result = 0;
        for (let outUnit in valuesInMeters) {
            if (outUnit === outputUnits) {
                result = inMeters / valuesInMeters[outUnit];
                // console.log(result);
                break
            }
        }
        outputField.value = result
    }
}