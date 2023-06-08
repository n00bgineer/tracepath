import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  DatetimeLocalField,
  RadioField,
  Submit,
} from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

const UserForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.user?.id)
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
          name="guid"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Guid
        </Label>

        <TextField
          name="guid"
          defaultValue={props.user?.guid}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="guid" className="rw-field-error" />

        <Label
          name="lastLoginAt"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Last login at
        </Label>

        <DatetimeLocalField
          name="lastLoginAt"
          defaultValue={formatDatetime(props.user?.lastLoginAt)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="lastLoginAt" className="rw-field-error" />

        <Label
          name="roleType"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Role type
        </Label>

        <div className="rw-check-radio-items">
          <RadioField
            id="user-roleType-0"
            name="roleType"
            defaultValue="USER"
            defaultChecked={props.user?.roleType?.includes('USER')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />

          <div>User</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="user-roleType-1"
            name="roleType"
            defaultValue="BOT"
            defaultChecked={props.user?.roleType?.includes('BOT')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />

          <div>Bot</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="user-roleType-2"
            name="roleType"
            defaultValue="ADMIN"
            defaultChecked={props.user?.roleType?.includes('ADMIN')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />

          <div>Admin</div>
        </div>

        <FieldError name="roleType" className="rw-field-error" />

        <Label
          name="accountType"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Account type
        </Label>

        <div className="rw-check-radio-items">
          <RadioField
            id="user-accountType-0"
            name="accountType"
            defaultValue="INDIVIDUAL"
            defaultChecked={props.user?.accountType?.includes('INDIVIDUAL')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />

          <div>Individual</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="user-accountType-1"
            name="accountType"
            defaultValue="ORGANIZATION"
            defaultChecked={props.user?.accountType?.includes('ORGANIZATION')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />

          <div>Organization</div>
        </div>

        <FieldError name="accountType" className="rw-field-error" />

        <Label
          name="subscriptionType"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Subscription type
        </Label>

        <div className="rw-check-radio-items">
          <RadioField
            id="user-subscriptionType-0"
            name="subscriptionType"
            defaultValue="FREE"
            defaultChecked={props.user?.subscriptionType?.includes('FREE')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />

          <div>Free</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="user-subscriptionType-1"
            name="subscriptionType"
            defaultValue="PRO_MONTHLY"
            defaultChecked={props.user?.subscriptionType?.includes(
              'PRO_MONTHLY'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />

          <div>Pro Monthly</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="user-subscriptionType-2"
            name="subscriptionType"
            defaultValue="PRO_ANNUAL"
            defaultChecked={props.user?.subscriptionType?.includes(
              'PRO_ANNUAL'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />

          <div>Pro Annual</div>
        </div>

        <FieldError name="subscriptionType" className="rw-field-error" />

        <Label
          name="userName"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          User name
        </Label>

        <TextField
          name="userName"
          defaultValue={props.user?.userName}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="userName" className="rw-field-error" />

        <Label
          name="email"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Email
        </Label>

        <TextField
          name="email"
          defaultValue={props.user?.email}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="email" className="rw-field-error" />

        <Label
          name="displayName"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Display name
        </Label>

        <TextField
          name="displayName"
          defaultValue={props.user?.displayName}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="displayName" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default UserForm
