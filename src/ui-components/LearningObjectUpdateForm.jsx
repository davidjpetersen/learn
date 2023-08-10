/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  TextAreaField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { LearningObject } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function LearningObjectUpdateForm(props) {
  const {
    id: idProp,
    learningObject: learningObjectModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    title: "",
    description: "",
    blocks: "",
    time: "",
    editorVersion: "",
  };
  const [title, setTitle] = React.useState(initialValues.title);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [blocks, setBlocks] = React.useState(initialValues.blocks);
  const [time, setTime] = React.useState(initialValues.time);
  const [editorVersion, setEditorVersion] = React.useState(
    initialValues.editorVersion
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = learningObjectRecord
      ? { ...initialValues, ...learningObjectRecord }
      : initialValues;
    setTitle(cleanValues.title);
    setDescription(cleanValues.description);
    setBlocks(
      typeof cleanValues.blocks === "string" || cleanValues.blocks === null
        ? cleanValues.blocks
        : JSON.stringify(cleanValues.blocks)
    );
    setTime(cleanValues.time);
    setEditorVersion(cleanValues.editorVersion);
    setErrors({});
  };
  const [learningObjectRecord, setLearningObjectRecord] = React.useState(
    learningObjectModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(LearningObject, idProp)
        : learningObjectModelProp;
      setLearningObjectRecord(record);
    };
    queryData();
  }, [idProp, learningObjectModelProp]);
  React.useEffect(resetStateValues, [learningObjectRecord]);
  const validations = {
    title: [],
    description: [],
    blocks: [{ type: "JSON" }],
    time: [],
    editorVersion: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          title,
          description,
          blocks,
          time,
          editorVersion,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            LearningObject.copyOf(learningObjectRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "LearningObjectUpdateForm")}
      {...rest}
    >
      <TextField
        label="Title"
        isRequired={false}
        isReadOnly={false}
        value={title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title: value,
              description,
              blocks,
              time,
              editorVersion,
            };
            const result = onChange(modelFields);
            value = result?.title ?? value;
          }
          if (errors.title?.hasError) {
            runValidationTasks("title", value);
          }
          setTitle(value);
        }}
        onBlur={() => runValidationTasks("title", title)}
        errorMessage={errors.title?.errorMessage}
        hasError={errors.title?.hasError}
        {...getOverrideProps(overrides, "title")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              description: value,
              blocks,
              time,
              editorVersion,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <TextAreaField
        label="Blocks"
        isRequired={false}
        isReadOnly={false}
        value={blocks}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              description,
              blocks: value,
              time,
              editorVersion,
            };
            const result = onChange(modelFields);
            value = result?.blocks ?? value;
          }
          if (errors.blocks?.hasError) {
            runValidationTasks("blocks", value);
          }
          setBlocks(value);
        }}
        onBlur={() => runValidationTasks("blocks", blocks)}
        errorMessage={errors.blocks?.errorMessage}
        hasError={errors.blocks?.hasError}
        {...getOverrideProps(overrides, "blocks")}
      ></TextAreaField>
      <TextField
        label="Time"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={time}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              title,
              description,
              blocks,
              time: value,
              editorVersion,
            };
            const result = onChange(modelFields);
            value = result?.time ?? value;
          }
          if (errors.time?.hasError) {
            runValidationTasks("time", value);
          }
          setTime(value);
        }}
        onBlur={() => runValidationTasks("time", time)}
        errorMessage={errors.time?.errorMessage}
        hasError={errors.time?.hasError}
        {...getOverrideProps(overrides, "time")}
      ></TextField>
      <TextField
        label="Editor version"
        isRequired={false}
        isReadOnly={false}
        value={editorVersion}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              description,
              blocks,
              time,
              editorVersion: value,
            };
            const result = onChange(modelFields);
            value = result?.editorVersion ?? value;
          }
          if (errors.editorVersion?.hasError) {
            runValidationTasks("editorVersion", value);
          }
          setEditorVersion(value);
        }}
        onBlur={() => runValidationTasks("editorVersion", editorVersion)}
        errorMessage={errors.editorVersion?.errorMessage}
        hasError={errors.editorVersion?.hasError}
        {...getOverrideProps(overrides, "editorVersion")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || learningObjectModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || learningObjectModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
