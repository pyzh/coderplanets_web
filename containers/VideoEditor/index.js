/*
 *
 * VideoEditor
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import Labeler from '../Labeler'
import { FormItem } from '../../components'

import AlertMessage from './AlertMessage'
import CoverUploader from './CoverUploader'
import Footer from './Footer'
import SourceOptions from './SourceOptions'

import { Wrapper, Title, FormWrapper } from './styles'

import { makeDebugger, storePlug } from '../../utils'
import * as logic from './logic'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:VideoEditor')
/* eslint-enable no-unused-vars */

class VideoEditorContainer extends React.Component {
  componentWillMount() {
    const { videoEditor } = this.props
    logic.init(videoEditor)
  }

  render() {
    const { videoEditor } = this.props

    const {
      editVideoData,
      publishing,
      success,
      error,
      warn,
      statusMsg,
      ratKey,
    } = videoEditor

    return (
      <Wrapper>
        <Title>发布视频链接</Title>
        <AlertMessage />
        <CoverUploader
          thumbnil={editVideoData.thumbnil}
          poster={editVideoData.poster}
        />
        <FormWrapper>
          <FormItem
            label="标题:"
            raw="title"
            ratKey={ratKey}
            value={editVideoData.title}
            onChange={logic.formDataChange('title')}
            placeholder="视频标题 #必填#"
          />
          <FormItem
            label="来源:"
            raw="source"
            ratKey={ratKey}
            value={editVideoData.source}
            onChange={logic.formDataChange('source')}
            placeholder="YouTube #必填#"
            att={
              <SourceOptions
                active={editVideoData.source}
                sourceOnSelect={logic.sourceOnSelect}
              />
            }
          />
          <FormItem
            label="视频链接:"
            raw="link"
            ratKey={ratKey}
            value={editVideoData.link}
            onChange={logic.formDataChange('link')}
            placeholder="https://youtube/xxx #必填#"
          />
          <FormItem
            label="原作者:"
            raw="originalAuthor"
            ratKey={ratKey}
            value={editVideoData.originalAuthor}
            onChange={logic.formDataChange('originalAuthor')}
            placeholder="原视频作者昵称 #必填#"
          />
          <FormItem
            label="作者链接:"
            raw="originalAuthorLink"
            ratKey={ratKey}
            value={editVideoData.originalAuthorLink}
            onChange={logic.formDataChange('originalAuthorLink')}
            placeholder="视频网站的作者主页||作者社交账号链接 #必填#"
          />
          <FormItem
            label="时长:"
            raw="duration"
            ratKey={ratKey}
            value={editVideoData.duration}
            onChange={logic.formDataChange('duration')}
            placeholder="mm:ss 或 hh:mm:ss #必填#"
          />
          <FormItem
            label="发布日期:"
            raw="publishAt"
            ratKey={ratKey}
            value={editVideoData.publishAt}
            onChange={logic.formDataChange('publishAt')}
            placeholder="原视频发布日期, 格式 YYYY-MM-DD #必填#"
          />
          <FormItem
            label="描述:"
            raw="desc"
            ratKey={ratKey}
            value={editVideoData.desc}
            onChange={logic.formDataChange('desc')}
            type="textarea"
            placeholder="视频描述信息 #必填#"
          />
          <FormItem
            label="标签:"
            value=""
            onChange={debug}
            type="node"
            node={<Labeler label="编辑" />}
          />
        </FormWrapper>

        <Footer
          isEdit={false}
          publishing={publishing}
          success={success}
          error={error}
          warn={warn}
          statusMsg={statusMsg}
        />
      </Wrapper>
    )
  }
}

export default inject(storePlug('videoEditor'))(observer(VideoEditorContainer))
