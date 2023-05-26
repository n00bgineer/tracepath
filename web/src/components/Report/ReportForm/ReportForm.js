import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  CheckboxField,
  TextAreaField,
  Submit,
} from '@redwoodjs/forms'

const ReportForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.report?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="userId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          User id
        </Label>

        <TextField
          name="userId"
          defaultValue={props.report?.userId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="userId" className="rw-field-error" />

        <Label
          name="reportVersion"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Report version
        </Label>

        <TextField
          name="reportVersion"
          defaultValue={props.report?.reportVersion}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="reportVersion" className="rw-field-error" />

        <Label
          name="lhVersion"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Lh version
        </Label>

        <TextField
          name="lhVersion"
          defaultValue={props.report?.lhVersion}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="lhVersion" className="rw-field-error" />

        <Label
          name="executionTime"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Execution time
        </Label>

        <TextField
          name="executionTime"
          defaultValue={props.report?.executionTime}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />

        <FieldError name="executionTime" className="rw-field-error" />

        <Label
          name="isPrivate"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Is private
        </Label>

        <CheckboxField
          name="isPrivate"
          defaultChecked={props.report?.isPrivate}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="isPrivate" className="rw-field-error" />

        <Label
          name="isTracerouteError"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Is traceroute error
        </Label>

        <CheckboxField
          name="isTracerouteError"
          defaultChecked={props.report?.isTracerouteError}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="isTracerouteError" className="rw-field-error" />

        <Label
          name="isLighthouseError"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Is lighthouse error
        </Label>

        <CheckboxField
          name="isLighthouseError"
          defaultChecked={props.report?.isLighthouseError}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="isLighthouseError" className="rw-field-error" />

        <Label
          name="regionName"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Region name
        </Label>

        <TextField
          name="regionName"
          defaultValue={props.report?.regionName}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="regionName" className="rw-field-error" />

        <Label
          name="url"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Url
        </Label>

        <TextField
          name="url"
          defaultValue={props.report?.url}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="url" className="rw-field-error" />

        <Label
          name="finalUrl"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Final url
        </Label>

        <TextField
          name="finalUrl"
          defaultValue={props.report?.finalUrl}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="finalUrl" className="rw-field-error" />

        <Label
          name="traceroute"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Traceroute
        </Label>

        <TextAreaField
          name="traceroute"
          defaultValue={JSON.stringify(props.report?.traceroute)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsJSON: true }}
        />

        <FieldError name="traceroute" className="rw-field-error" />

        <Label
          name="fcpScore"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Fcp score
        </Label>

        <TextField
          name="fcpScore"
          defaultValue={props.report?.fcpScore}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true }}
        />

        <FieldError name="fcpScore" className="rw-field-error" />

        <Label
          name="fcpValue"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Fcp value
        </Label>

        <TextField
          name="fcpValue"
          defaultValue={props.report?.fcpValue}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true }}
        />

        <FieldError name="fcpValue" className="rw-field-error" />

        <Label
          name="lcpScore"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Lcp score
        </Label>

        <TextField
          name="lcpScore"
          defaultValue={props.report?.lcpScore}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true }}
        />

        <FieldError name="lcpScore" className="rw-field-error" />

        <Label
          name="lcpValue"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Lcp value
        </Label>

        <TextField
          name="lcpValue"
          defaultValue={props.report?.lcpValue}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true }}
        />

        <FieldError name="lcpValue" className="rw-field-error" />

        <Label
          name="tbtScore"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Tbt score
        </Label>

        <TextField
          name="tbtScore"
          defaultValue={props.report?.tbtScore}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true }}
        />

        <FieldError name="tbtScore" className="rw-field-error" />

        <Label
          name="tbtValue"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Tbt value
        </Label>

        <TextField
          name="tbtValue"
          defaultValue={props.report?.tbtValue}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true }}
        />

        <FieldError name="tbtValue" className="rw-field-error" />

        <Label
          name="ttiScore"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Tti score
        </Label>

        <TextField
          name="ttiScore"
          defaultValue={props.report?.ttiScore}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true }}
        />

        <FieldError name="ttiScore" className="rw-field-error" />

        <Label
          name="ttiValue"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Tti value
        </Label>

        <TextField
          name="ttiValue"
          defaultValue={props.report?.ttiValue}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true }}
        />

        <FieldError name="ttiValue" className="rw-field-error" />

        <Label
          name="clsScore"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Cls score
        </Label>

        <TextField
          name="clsScore"
          defaultValue={props.report?.clsScore}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true }}
        />

        <FieldError name="clsScore" className="rw-field-error" />

        <Label
          name="srtValue"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Srt value
        </Label>

        <TextField
          name="srtValue"
          defaultValue={props.report?.srtValue}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true }}
        />

        <FieldError name="srtValue" className="rw-field-error" />

        <Label
          name="srtItems"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Srt items
        </Label>

        <TextField
          name="srtItems"
          defaultValue={props.report?.srtItems}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true }}
        />

        <FieldError name="srtItems" className="rw-field-error" />

        <Label
          name="speedIndexScore"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Speed index score
        </Label>

        <TextField
          name="speedIndexScore"
          defaultValue={props.report?.speedIndexScore}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true }}
        />

        <FieldError name="speedIndexScore" className="rw-field-error" />

        <Label
          name="speedIndexValue"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Speed index value
        </Label>

        <TextField
          name="speedIndexValue"
          defaultValue={props.report?.speedIndexValue}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true }}
        />

        <FieldError name="speedIndexValue" className="rw-field-error" />

        <Label
          name="bootupTimeScore"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Bootup time score
        </Label>

        <TextField
          name="bootupTimeScore"
          defaultValue={props.report?.bootupTimeScore}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true }}
        />

        <FieldError name="bootupTimeScore" className="rw-field-error" />

        <Label
          name="bootupTimeValue"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Bootup time value
        </Label>

        <TextField
          name="bootupTimeValue"
          defaultValue={props.report?.bootupTimeValue}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true }}
        />

        <FieldError name="bootupTimeValue" className="rw-field-error" />

        <Label
          name="bootupTimeItems"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Bootup time items
        </Label>

        <TextAreaField
          name="bootupTimeItems"
          defaultValue={JSON.stringify(props.report?.bootupTimeItems)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsJSON: true }}
        />

        <FieldError name="bootupTimeItems" className="rw-field-error" />

        <Label
          name="bootupTimeSummary"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Bootup time summary
        </Label>

        <TextAreaField
          name="bootupTimeSummary"
          defaultValue={JSON.stringify(props.report?.bootupTimeSummary)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsJSON: true }}
        />

        <FieldError name="bootupTimeSummary" className="rw-field-error" />

        <Label
          name="thirdPartyItems"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Third party items
        </Label>

        <TextAreaField
          name="thirdPartyItems"
          defaultValue={JSON.stringify(props.report?.thirdPartyItems)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsJSON: true }}
        />

        <FieldError name="thirdPartyItems" className="rw-field-error" />

        <Label
          name="thirdPartySummary"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Third party summary
        </Label>

        <TextAreaField
          name="thirdPartySummary"
          defaultValue={JSON.stringify(props.report?.thirdPartySummary)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsJSON: true }}
        />

        <FieldError name="thirdPartySummary" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default ReportForm
