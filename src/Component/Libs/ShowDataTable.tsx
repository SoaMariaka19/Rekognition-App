import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { Table } from 'react-bootstrap';

export default function TableData(props : any) {
   
    const {
      dataTitle,
      dataValue,
      dataConfidence,
      dataEmotions2,
      dataEmotions3,
      dataEmotions4,
      dataEmotions5,
      dataEmotions6,
      dataEmotions7,
  }  = props;
    const key = "ok"

    return (
<>
    <div>
    <Accordion>
            <AccordionItem >
                <AccordionItemHeading>
                    <AccordionItemButton aria-expanded="true">
                      {dataTitle}  
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
        <Table>
            <tr>
                <th>
                    {dataValue}
                </th>
            </tr> 
            <tr>
                <th>
                    {dataConfidence}
                </th>
            </tr>
            <tr>
                <th>
                    {dataEmotions2}
                </th>
            </tr>
            <tr>
                <th>
                    {dataEmotions3}
                </th>
            </tr>
            </Table>      
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemPanel>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
    </div>
</>
    )

}
