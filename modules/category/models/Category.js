const mongoose = require('mongoose')
const choicesShema = {

  label: {
    type: String,
    required: true
  },
  value: {
    type: mongoose.shema.types.Mixed
  }
}
const categoryShema = mongoose.shema({
  /**
       * Name of the catrgory
       *
       */
  name: {
    type: String,
    required: [true, 'Name is required'],
    minlength: [2, 'Name can\'t be smaller than 2 characters '],
    maxlength: [32, 'Name can\'t be greater than 32 characters']
  },
  /**
       * Name of the catrgory
       *
       */
  description: {
    type: String,
    required: [true, 'Description is required']
  },
  /**
       * will be used for SEO
       *
       */
  seoDescription: {
    type: String,
    max: 160
  },
  thumbnail: {
    type: String

  },
  /**
   * Filter that apply to this category
   */
  filters: [{
    /**
     * Filter like Ram ,Strorage
     */
    name: {
      type: String,
      required: true
    },
    /**
     * Optional
     * Possible choices for filter like 1Gb, 2Gb
     */
    choices: [choicesShema],
    /**
     * Is it required on product
     */
    required: {
      type: Boolean
    },
    /**
     Input type
     */
    input: {
      type: {
        type: String,

        /**
         * what kind of input is shown to product detail input
         */
        enum: ['numberInput', 'textInput', 'selectOne', 'selectMultiple']
      },
      /**
       * Availble values for filter
       */
      choices: [choicesShema]
    }

  }],
  /**  Reserved for future */
  isActive: {
    type: Boolean,
    default: true
  },

  /**
   * Stores when this product got deleted
   */
  deletedAt: {
    type: Date
  },
  timestamps: true

})
const category = mongoose.model('Category', categoryShema)
module.exports = category
