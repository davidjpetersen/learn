import { useState, useEffect, useRef } from 'react';
import { DataStore } from '@aws-amplify/datastore';
import { LearningObject } from './models';

// Amplify
import {Amplify } from 'aws-amplify';
import awsConfig from './aws-exports';
Amplify.configure(awsConfig);

// Tools
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import Checklist from '@editorjs/checklist';
import CodeTool from '@editorjs/code';
import Delimiter from '@editorjs/delimiter';
import Embed from '@editorjs/embed';
import Image from '@editorjs/image';
import List from '@editorjs/list';
import Marker from '@editorjs/marker';
import Paragraph from '@editorjs/paragraph';
import Quote from '@editorjs/quote';
import RawTool from '@editorjs/raw';
import Table from '@editorjs/table';
import Warning from '@editorjs/warning';

const enabledTools = {
    header: Header,
    checklist: Checklist,
    code: CodeTool,
    delimiter: Delimiter,
    embed: Embed,
    image: Image,
    list: List,
    marker: Marker,
    paragraph: Paragraph,
    quote: Quote,
    raw: RawTool,
    table: Table,
    warning: Warning,
};


// Assuming you have an appropriate GraphQL query/mutation for loading/saving data
const Editor = () => {
  const editorContainer = useRef(null);
  const [editor, setEditor] = useState(null);

  useEffect(() => {
    let editorInstance;
  
    const loadEditorContent = async () => {
      try {
        const result = await DataStore.query(LearningObject, "df3dd272-a16d-4d6f-a4b1-504fa774fa0f");
        console.log('LearningObject:', result);
  
        editorInstance = new EditorJS({
          holder: editorContainer.current,
          data: result,
          tools: enabledTools
        });
  
        setEditor(editorInstance);
      } catch (error) {
        console.error("Error loading editor content:", error);
      }
    };
  
    loadEditorContent();
  
    // Cleanup on unmount
    return () => {
      if (editorInstance) {
        editorInstance.destroy();
      }
    };
  }, []);
  

  const handleSave = async () => {
    try {
    //   const savedData = await editor.save();
    //   await API.graphql(graphqlOperation(saveEditorContent, { input: savedData }));
      alert('Content saved!');
    } catch(error) {
      console.error("Error saving editor content:", error);
    } 
        
  };

  return (
    <div>
      <div ref={editorContainer}></div>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default Editor;
