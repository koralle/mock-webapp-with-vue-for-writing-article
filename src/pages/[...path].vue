<template>
  <UError
    as="div"
    :error="{
      statusCode: 404,
      statusMessage: 'ページが見つかりませんでした。',
      message: 'お探しのページは削除されたか、別のURLに変更されている可能性があります。'
    }"
  />
</template>
