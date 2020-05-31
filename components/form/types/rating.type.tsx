import {Form, Rate} from 'antd'
import React from 'react'
import {FieldTypeProps} from './type.props'

export const RatingType: React.FC<FieldTypeProps> = ({field}) => {
  // TODO add ratings

  return (
    <div>
      <Form.Item
        name={[field.id, 'value']}
        rules={[
          { required: field.required, message: 'Please provide Information' },
        ]}
      >
        <Rate allowHalf defaultValue={parseFloat(field.value)} />
      </Form.Item>
    </div>
  )
}
