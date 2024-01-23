    function addNewSchema()
    {
        var selectedSchema = document.getElementById('addSchemanew');
        var selectedOption = selectedSchema.options[selectedSchema.selectedIndex];

        if (selectedOption)     
        {
            var blueBox = document.getElementById('blueBox');

            // Create a new dropdown
            var newDropdown = document.createElement('select');

            // Add options that are not selected yet
            var options = document.getElementById('addSchemanew').options;
            for (var i = 0; i < options.length; i++) 
            
            {
                if (!options[i].disabled)
                 {
                    var option = document.createElement('option');
                    option.value = options[i].value;
                    option.text = options[i].text;
                    newDropdown.add(option);
                }
            }

            // Add the new dropdown to the blue box
            blueBox.appendChild(newDropdown);

            // Reset the "Add schema to segment" dropdown
            selectedSchema.selectedIndex = 0;
        }
    }