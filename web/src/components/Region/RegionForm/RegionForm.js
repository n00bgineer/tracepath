// IMPORTING PACKAGE/MODULES
import {
  Form,
  FormError,
  FieldError,
  Label,
  DatetimeLocalField,
  RadioField,
  TextField,
  TextAreaField,
  Submit,
} from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

const RegionForm = (props) => {
  const onSubmit = (data) => {
    if (data.providerType === '') {
      data.providerType = null
    }

    props.onSave(data, props?.region?.id)
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
          name="expiryAt"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Expiry at
        </Label>

        <DatetimeLocalField
          name="expiryAt"
          defaultValue={formatDatetime(props.region?.expiryAt)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="expiryAt" className="rw-field-error" />

        <Label
          name="providerType"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Provider type
        </Label>

        <div className="rw-check-radio-items">
          <RadioField
            id="region-providerType-none"
            name="providerType"
            defaultValue=""
            defaultChecked={!props.spot?.spotType}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />

          <div className="rw-check-radio-item-none">None</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="region-providerType-0"
            name="providerType"
            defaultValue="AWSEC2"
            defaultChecked={props.region?.providerType?.includes('AWSEC2')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />

          <div>Awsec2</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="region-providerType-1"
            name="providerType"
            defaultValue="AWSLS"
            defaultChecked={props.region?.providerType?.includes('AWSLS')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />

          <div>Awsls</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="region-providerType-2"
            name="providerType"
            defaultValue="GOOGLE"
            defaultChecked={props.region?.providerType?.includes('GOOGLE')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />

          <div>Google</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="region-providerType-3"
            name="providerType"
            defaultValue="AZURE"
            defaultChecked={props.region?.providerType?.includes('AZURE')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />

          <div>Azure</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="region-providerType-4"
            name="providerType"
            defaultValue="DIGITALOCEAN"
            defaultChecked={props.region?.providerType?.includes(
              'DIGITALOCEAN'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />

          <div>Digitalocean</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="region-providerType-5"
            name="providerType"
            defaultValue="ALIBABA"
            defaultChecked={props.region?.providerType?.includes('ALIBABA')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />

          <div>Alibaba</div>
        </div>

        <FieldError name="providerType" className="rw-field-error" />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>

        <TextField
          name="name"
          defaultValue={props.region?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="regionName"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Region name
        </Label>

        <TextField
          name="regionName"
          defaultValue={props.region?.regionName}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="regionName" className="rw-field-error" />

        <Label
          name="authKey"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Auth key
        </Label>

        <TextField
          name="authKey"
          defaultValue={props.region?.authKey}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="authKey" className="rw-field-error" />

        <Label
          name="ipAddress"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Ip address
        </Label>

        <TextField
          name="ipAddress"
          defaultValue={props.region?.ipAddress}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="ipAddress" className="rw-field-error" />

        <Label
          name="portNo"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Port no
        </Label>

        <TextField
          name="portNo"
          defaultValue={props.region?.portNo}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="portNo" className="rw-field-error" />

        <Label
          name="machineConfig"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Machine config
        </Label>

        <TextAreaField
          name="machineConfig"
          defaultValue={JSON.stringify(props.region?.machineConfig)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsJSON: true }}
        />

        <FieldError name="machineConfig" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default RegionForm
