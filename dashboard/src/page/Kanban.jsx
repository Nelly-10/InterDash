import React from 'react';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-kanban';

import { kanbanData, kanbanGrid } from '../data/dummy';
import { Header } from '../component';
import { useStateContext } from '../contexts/ContextProvider';

const Kanban = () => {
  const { currentMode } = useStateContext();
  return (
    <div className={`m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl ${currentMode === 'Dark' ? 'dark:bg-secondary-dark-bg text-gray-100' : 'bg-white'
      }`}>
      <Header category="App" title="Kanban" />
      <KanbanComponent
        id="kanban"
        keyField="Status"
        dataSource={kanbanData}
        cardSettings={{ contentField: 'Summary', headerField: 'Id' }}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {kanbanGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
      </KanbanComponent>
    </div>
  )
}




export default Kanban;
