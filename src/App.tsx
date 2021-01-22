import { Box, Flex, Flash } from "@primer/components";
import { useEffect, useState } from "react";
import NewDataFormat from "./types/NewDataFormat";
import OldDataFormat from './types/OldDataFormat';

// There should be a better faster way but I don't care that much right now
const migratePanelJSON = (oldPanelJSON: OldDataFormat): NewDataFormat => {
  const newPanelJSON: NewDataFormat = {
    options: {
      imageUrl: oldPanelJSON.bgimage,
      forceImageRefresh: false,
      lockSensors: oldPanelJSON.islocked,
      sensorsTextSize: 1,

      sensors: [],
      mappings: [],
    },

    type: 'pierosavi-imageit-panel',
    title: oldPanelJSON.title,
    gridPos: oldPanelJSON.gridPos,
    id: oldPanelJSON.id,
    targets: oldPanelJSON.targets,
    pluginVersion: oldPanelJSON.pluginVersion,
    timeFrom: oldPanelJSON.timeFrom,
    timeShift: oldPanelJSON.timeShift,
    datasource: oldPanelJSON.datasource
  }

  newPanelJSON.options.sensors = oldPanelJSON.sensors.map((sensor) => ({
    name: sensor.displayName,
    backgroundBlink: false,
    backgroundColor: sensor.bgColor,
    bold: false,
    decimals: sensor.decimals,
    fontColor: sensor.fontColor,
    link: sensor.link_url,
    position: {
      x: sensor.xlocation,
      y: sensor.ylocation,
    },
    query: {
      id: sensor.metric,
      alias: sensor.metric,
    },
    visible: true,
    unit: sensor.unitFormat,
    valueBlink: false,
    mappingId: sensor.valueMappingIds[0],
  }))

  newPanelJSON.options.mappings = oldPanelJSON.valueMappings.map((mapping) => ({
    compareTo: mapping.compareTo,
    description: '',
    id: mapping.id,
    values: {
      visible: true,
      backgroundBlink: mapping.bgBlink,
      backgroundColor: mapping.bgColor,
      bold: mapping.isSensorFontBold,
      fontColor: mapping.fontColor,
      valueBlink: mapping.valueBlink,
    },
    // change less to small
    operator: (mapping.mappingOperatorName === 'lessThan' ? 'smallerThan' : mapping.mappingOperatorName),
  }))

  return newPanelJSON;
}

function App() {
  const [error, setError] = useState(false);
  const [outputTextAreaValue, setOutputTextAreaValue] = useState('');
  let [oldDataInput, setOldDataInput] = useState<OldDataFormat>();

  const onInputTAChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    try {
      setOldDataInput(JSON.parse(event.currentTarget.value))
      setError(false);
    } catch (error) {
      if (event.currentTarget.value === '') {
        setError(false);
        setOutputTextAreaValue('');
      } else {
        setError(true);
      }
    }
  }

  useEffect(() => {
    if (oldDataInput) {
      try {
        setOutputTextAreaValue(JSON.stringify(migratePanelJSON(oldDataInput), null, 2));
      } catch (error) {
        setError(true);
      }
    }
  }, [oldDataInput]);

  return (
    <>
    <Flex padding={4}>
      <Box width={[1, 1/2, 1/2]} padding={2}>
        <textarea placeholder='Input text area. Paste panel JSON here.' onChange={onInputTAChange} style={{width: '100%', height: '200px', resize: 'vertical'}}></textarea>
      </Box>

      <Box width={[1, 1/2, 1/2]} padding={2}>
        {/* <Button>Copy text to clipboard</Button> */}
        <textarea placeholder='Output text area.' disabled value={outputTextAreaValue} style={{width: '100%', height: '200px', resize: 'vertical'}}></textarea>
      </Box>
    </Flex>
    <Box padding={4}>
      {error && <Flash variant="danger">
        Error parsing JSON. Check that the format is ok.
      </Flash>}
    </Box>
    </>
  );
}

export default App;
