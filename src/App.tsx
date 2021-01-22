import { Box, Flex, Flash, Heading, Text } from "@primer/components";
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

  const onOutputTAClicked = (element: React.MouseEvent<HTMLTextAreaElement, MouseEvent>) => {
    try {
      element.currentTarget.select()
      document.execCommand("copy")
    } catch (error) {
      console.error(error) 
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

  const wrapperBoxHeight = error ? 'calc(100vh - 68px - 152px - 50px)' : 'calc(100vh - 68px - 152px)'

  return (
    <Box padding={4}>
      <Heading>How does it work?</Heading>
      <Text>
        Go to your v0.x.x ImageIt panel, click on the panel title &gt; Inspect &gt; Panel JSON.
        <br />
        Copy the content and paste it inside the input text area below.
      </Text>
      <Box paddingTop={4} paddingBottom={4} display={['block', 'block', 'block', 'block', 'flex']} height={wrapperBoxHeight}>
        <Flex width={1} padding={2} height={['50%', '50%', '50%', '50%', '100%']}>
          <textarea  placeholder='Input text area. Paste panel JSON here.' onChange={onInputTAChange} style={{width: '100%', height: '100%', resize: 'none'}}></textarea>
        </Flex>

        <Flex width={1} padding={2} height={['50%', '50%', '50%', '50%', '100%']}>
          <textarea placeholder='Output text area. Not editable. Click to copy content to clipboard.' onClick={onOutputTAClicked} value={outputTextAreaValue} onChange={() => {}} style={{width: '100%', height: '100%', resize: 'none'}}></textarea>
        </Flex>
      </Box>
      {error && <Box>
        <Flash variant="danger">
          Error parsing JSON. Check that the format is ok.
        </Flash>
      </Box>}
    </Box>
  );
}

export default App;
