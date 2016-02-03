import { createAction, handleActions } from 'redux-actions'

// ------------------------------------
// Initial State
// ------------------------------------

export const initialState = {
  'categories': [
    {
      'id': 903,
      'topic': 'Baby',
      'slug': 'baby'
    },
    {
      'id': 881,
      'topic': 'Pregnancy',
      'slug': 'pregnancy'
    }
  ],
  'questions': {
    903: [
      {
        'id': 2141,
        'account_id': 3088,
        'question': 'Can I get pregnant if I have sex while breastfeeding?',
        'answer': 'Yes you can get pregnant while breastfeeding. Getting pregnant too soon can be dangerous for you, and your next baby could be born weak and early.\nIt\'s best to not have sex for at least 6 weeks after birth or until you have healed. When you start having sex, use a family planning method. This will prevent you from getting pregnant too early. There are plenty of options to choose from. Condoms will prevent pregnancy and sexually transmitted infections and diseases.',
        'created_at': '2014-08-25 09:37:58',
        'updated_at': '2014-08-25 09:37:58',
        'active': 1,
        'parsed_answer': '<p>Yes you can get pregnant while breastfeeding. Getting pregnant too soon can be dangerous for you, and your next baby could be born weak and early.\nIt\'s best to not have sex for at least 6 weeks after birth or until you have healed. When you start having sex, use a family planning method. This will prevent you from getting pregnant too early. There are plenty of options to choose from. Condoms will prevent pregnancy and sexually transmitted infections and diseases.</p>\n',
        'pivot': {
          'topic_id': 903,
          'question_id': 2141,
          'featured': 0,
          'order': 0
        },
        'account': {
          'id': 3088,
          'organization': 'MomConnect',
          'domain': 'momconnect.besnappy.com',
          'plan_id': 5,
          'active': 1,
          'created_at': '2014-06-30 15:22:31',
          'updated_at': '2016-02-03 01:23:12',
          'custom_domain': null,
          'trial_ends_at': '2014-07-21 15:22:31',
          'cancel_message': null,
          'forward_shown': 1,
          'badge_url': '',
          'last_paid_at': '2016-02-03 01:23:12',
          'invoiced': null,
          'cancelled_at': null,
          'is_paid': true,
          'is_trial': false
        }
      },
      {
        'id': 2019,
        'account_id': 3088,
        'question': 'Clinic visits',
        'answer': 'You need to take your baby back to the clinic for a check-up 3 days after birth; 6 weeks after birth, and then every month. Clinic staff will weigh your baby and test her for HIV if necessary. If you know early on that your baby is HIV-positive she can get the best care. Bring the Road to Health booklet to the clinic. It helps to track your baby\'s health.',
        'created_at': '2014-08-13 21:46:26',
        'updated_at': '2014-08-13 21:46:26',
        'active': 1,
        'parsed_answer': '<p>You need to take your baby back to the clinic for a check-up 3 days after birth; 6 weeks after birth, and then every month. Clinic staff will weigh your baby and test her for HIV if necessary. If you know early on that your baby is HIV-positive she can get the best care. Bring the Road to Health booklet to the clinic. It helps to track your baby\'s health.</p>\n',
        'pivot': {
          'topic_id': 903,
          'question_id': 2019,
          'featured': 0,
          'order': 0
        },
        'account': {
          'id': 3088,
          'organization': 'MomConnect',
          'domain': 'momconnect.besnappy.com',
          'plan_id': 5,
          'active': 1,
          'created_at': '2014-06-30 15:22:31',
          'updated_at': '2016-02-03 01:23:12',
          'custom_domain': null,
          'trial_ends_at': '2014-07-21 15:22:31',
          'cancel_message': null,
          'forward_shown': 1,
          'badge_url': '',
          'last_paid_at': '2016-02-03 01:23:12',
          'invoiced': null,
          'cancelled_at': null,
          'is_paid': true,
          'is_trial': false
        }
      },
      {
        'id': 2045,
        'account_id': 3088,
        'question': 'Colostrum',
        'answer': 'The first milk you make is very thick and creamy-coloured. It is called colostrum. Colostrum is rich in nutrients and antibodies. Give this precious gift to your baby as soon as he is born, within the first hour. It will give your baby the best protection against illness. Feeding him anything else is harmful and a waste of your special milk. Breastfeed instead. It will be worth it.\n',
        'created_at': '2014-08-13 22:21:21',
        'updated_at': '2014-08-13 22:21:21',
        'active': 1,
        'parsed_answer': '<p>The first milk you make is very thick and creamy-coloured. It is called colostrum. Colostrum is rich in nutrients and antibodies. Give this precious gift to your baby as soon as he is born, within the first hour. It will give your baby the best protection against illness. Feeding him anything else is harmful and a waste of your special milk. Breastfeed instead. It will be worth it.</p>\n',
        'pivot': {
          'topic_id': 903,
          'question_id': 2045,
          'featured': 0,
          'order': 0
        },
        'account': {
          'id': 3088,
          'organization': 'MomConnect',
          'domain': 'momconnect.besnappy.com',
          'plan_id': 5,
          'active': 1,
          'created_at': '2014-06-30 15:22:31',
          'updated_at': '2016-02-03 01:23:12',
          'custom_domain': null,
          'trial_ends_at': '2014-07-21 15:22:31',
          'cancel_message': null,
          'forward_shown': 1,
          'badge_url': '',
          'last_paid_at': '2016-02-03 01:23:12',
          'invoiced': null,
          'cancelled_at': null,
          'is_paid': true,
          'is_trial': false
        }
      },
      {
        'id': 2046,
        'account_id': 3088,
        'question': 'Complementary feeding from 6 months',
        'answer': 'Your baby will be ready for solid foods at 6 months. Try offering her 1 or 2 spoonfuls of thick, mashed vegetables or fruit. As she gets used to them, start to add other foods like porridge and other mashed foods like beans, lentils and meat. Slowly increase the number of times she has solid food in a day. When your baby is 7 months old, she should be eating solids 3 times a day. Continue breastfeeding your baby, in addition to giving her solid food',
        'created_at': '2014-08-13 22:21:56',
        'updated_at': '2014-08-13 22:21:56',
        'active': 1,
        'parsed_answer': '<p>Your baby will be ready for solid foods at 6 months. Try offering her 1 or 2 spoonfuls of thick, mashed vegetables or fruit. As she gets used to them, start to add other foods like porridge and other mashed foods like beans, lentils and meat. Slowly increase the number of times she has solid food in a day. When your baby is 7 months old, she should be eating solids 3 times a day. Continue breastfeeding your baby, in addition to giving her solid food</p>\n',
        'pivot': {
          'topic_id': 903,
          'question_id': 2046,
          'featured': 0,
          'order': 0
        },
        'account': {
          'id': 3088,
          'organization': 'MomConnect',
          'domain': 'momconnect.besnappy.com',
          'plan_id': 5,
          'active': 1,
          'created_at': '2014-06-30 15:22:31',
          'updated_at': '2016-02-03 01:23:12',
          'custom_domain': null,
          'trial_ends_at': '2014-07-21 15:22:31',
          'cancel_message': null,
          'forward_shown': 1,
          'badge_url': '',
          'last_paid_at': '2016-02-03 01:23:12',
          'invoiced': null,
          'cancelled_at': null,
          'is_paid': true,
          'is_trial': false
        }
      },
      {
        'id': 1984,
        'account_id': 3088,
        'question': 'Cord care',
        'answer': 'Keep your baby\'s cord dry and open to the air to prevent infection. Clean it with surgical spirits. If it becomes red or smelly, please go to the clinic.',
        'created_at': '2014-08-13 18:22:23',
        'updated_at': '2014-08-13 18:22:23',
        'active': 1,
        'parsed_answer': '<p>Keep your baby\'s cord dry and open to the air to prevent infection. Clean it with surgical spirits. If it becomes red or smelly, please go to the clinic.</p>\n',
        'pivot': {
          'topic_id': 903,
          'question_id': 1984,
          'featured': 0,
          'order': 0
        },
        'account': {
          'id': 3088,
          'organization': 'MomConnect',
          'domain': 'momconnect.besnappy.com',
          'plan_id': 5,
          'active': 1,
          'created_at': '2014-06-30 15:22:31',
          'updated_at': '2016-02-03 01:23:12',
          'custom_domain': null,
          'trial_ends_at': '2014-07-21 15:22:31',
          'cancel_message': null,
          'forward_shown': 1,
          'badge_url': '',
          'last_paid_at': '2016-02-03 01:23:12',
          'invoiced': null,
          'cancelled_at': null,
          'is_paid': true,
          'is_trial': false
        }
      },
      {
        'id': 2039,
        'account_id': 3088,
        'question': 'Diarrhoea',
        'answer': 'If your baby has diarrhoea, make a drink for her by adding 8 flat teaspoons of sugar and half a teaspoon of salt to a litre of clean water. Let her sip this from a cup. If she refuses to drink, or has sunken eyes or a dry mouth, take her to the clinic. Keep on breastfeeding. ',
        'created_at': '2014-08-13 22:17:57',
        'updated_at': '2014-08-13 22:17:57',
        'active': 1,
        'parsed_answer': '<p>If your baby has diarrhoea, make a drink for her by adding 8 flat teaspoons of sugar and half a teaspoon of salt to a litre of clean water. Let her sip this from a cup. If she refuses to drink, or has sunken eyes or a dry mouth, take her to the clinic. Keep on breastfeeding.</p>\n',
        'pivot': {
          'topic_id': 903,
          'question_id': 2039,
          'featured': 0,
          'order': 0
        },
        'account': {
          'id': 3088,
          'organization': 'MomConnect',
          'domain': 'momconnect.besnappy.com',
          'plan_id': 5,
          'active': 1,
          'created_at': '2014-06-30 15:22:31',
          'updated_at': '2016-02-03 01:23:12',
          'custom_domain': null,
          'trial_ends_at': '2014-07-21 15:22:31',
          'cancel_message': null,
          'forward_shown': 1,
          'badge_url': '',
          'last_paid_at': '2016-02-03 01:23:12',
          'invoiced': null,
          'cancelled_at': null,
          'is_paid': true,
          'is_trial': false
        }
      },
      {
        'id': 2040,
        'account_id': 3088,
        'question': 'Does he need water?',
        'answer': 'No. Your baby needs only breast milk and nothing else, not even water, until he is 6 months old. Breast milk really is the best and only food your baby needs in the first six months. It protects him from disease.',
        'created_at': '2014-08-13 22:18:28',
        'updated_at': '2014-08-13 22:18:28',
        'active': 1,
        'parsed_answer': '<p>No. Your baby needs only breast milk and nothing else, not even water, until he is 6 months old. Breast milk really is the best and only food your baby needs in the first six months. It protects him from disease.</p>\n',
        'pivot': {
          'topic_id': 903,
          'question_id': 2040,
          'featured': 0,
          'order': 0
        },
        'account': {
          'id': 3088,
          'organization': 'MomConnect',
          'domain': 'momconnect.besnappy.com',
          'plan_id': 5,
          'active': 1,
          'created_at': '2014-06-30 15:22:31',
          'updated_at': '2016-02-03 01:23:12',
          'custom_domain': null,
          'trial_ends_at': '2014-07-21 15:22:31',
          'cancel_message': null,
          'forward_shown': 1,
          'badge_url': '',
          'last_paid_at': '2016-02-03 01:23:12',
          'invoiced': null,
          'cancelled_at': null,
          'is_paid': true,
          'is_trial': false
        }
      },
      {
        'id': 2042,
        'account_id': 3088,
        'question': 'Feeling sad?',
        'answer': 'Feeling sad? Not enjoying anything? It is common for new moms to feel sad or overwhelmed. Your body is still settling down and you can feel very low. If you don\'t start feeling better call 011 728 1347 or talk to your health worker about this. You may have post-natal depression. This is nothing to be ashamed of. Seek help if this feeling continues. (This is not a toll-free number)',
        'created_at': '2014-08-13 22:19:36',
        'updated_at': '2014-08-13 22:19:36',
        'active': 1,
        'parsed_answer': '<p>Feeling sad? Not enjoying anything? It is common for new moms to feel sad or overwhelmed. Your body is still settling down and you can feel very low. If you don\'t start feeling better call 011 728 1347 or talk to your health worker about this. You may have post-natal depression. This is nothing to be ashamed of. Seek help if this feeling continues. (This is not a toll-free number)</p>\n',
        'pivot': {
          'topic_id': 903,
          'question_id': 2042,
          'featured': 0,
          'order': 0
        },
        'account': {
          'id': 3088,
          'organization': 'MomConnect',
          'domain': 'momconnect.besnappy.com',
          'plan_id': 5,
          'active': 1,
          'created_at': '2014-06-30 15:22:31',
          'updated_at': '2016-02-03 01:23:12',
          'custom_domain': null,
          'trial_ends_at': '2014-07-21 15:22:31',
          'cancel_message': null,
          'forward_shown': 1,
          'badge_url': '',
          'last_paid_at': '2016-02-03 01:23:12',
          'invoiced': null,
          'cancelled_at': null,
          'is_paid': true,
          'is_trial': false
        }
      },
      {
        'id': 1987,
        'account_id': 3088,
        'question': 'HIV-positive and breastfeeding',
        'answer': 'For the first 6 months, give your baby ONLY breast milk. No other milk or fluids should be given, as this reduces the good effects of breast milk. All babies born to HIV-positive mothers are vulnerable to HIV and must be tested for HIV at 6 weeks of age; again 6 weeks after you stop breastfeeding; and again when he is 18 months old. If you are HIV-positive you must take your ARVs and ensure your baby takes Nevirapine syrup for 6 weeks, starting from birth.',
        'created_at': '2014-08-13 18:24:49',
        'updated_at': '2014-08-13 18:27:44',
        'active': 1,
        'parsed_answer': '<p>For the first 6 months, give your baby ONLY breast milk. No other milk or fluids should be given, as this reduces the good effects of breast milk. All babies born to HIV-positive mothers are vulnerable to HIV and must be tested for HIV at 6 weeks of age; again 6 weeks after you stop breastfeeding; and again when he is 18 months old. If you are HIV-positive you must take your ARVs and ensure your baby takes Nevirapine syrup for 6 weeks, starting from birth.</p>\n',
        'pivot': {
          'topic_id': 903,
          'question_id': 1987,
          'featured': 0,
          'order': 0
        },
        'account': {
          'id': 3088,
          'organization': 'MomConnect',
          'domain': 'momconnect.besnappy.com',
          'plan_id': 5,
          'active': 1,
          'created_at': '2014-06-30 15:22:31',
          'updated_at': '2016-02-03 01:23:12',
          'custom_domain': null,
          'trial_ends_at': '2014-07-21 15:22:31',
          'cancel_message': null,
          'forward_shown': 1,
          'badge_url': '',
          'last_paid_at': '2016-02-03 01:23:12',
          'invoiced': null,
          'cancelled_at': null,
          'is_paid': true,
          'is_trial': false
        }
      },
      {
        'id': 2018,
        'account_id': 3088,
        'question': 'Latching',
        'answer': 'Your baby needs a good mouthful of your breast to feed well. Check that he has most of the dark area around your nipple in his mouth. If you see his jaw moving up and down as he feeds, you know he has latched on. Getting your baby to latch on well will prevent your nipples from getting sore.',
        'created_at': '2014-08-13 21:45:34',
        'updated_at': '2014-08-13 21:45:34',
        'active': 1,
        'parsed_answer': '<p>Your baby needs a good mouthful of your breast to feed well. Check that he has most of the dark area around your nipple in his mouth. If you see his jaw moving up and down as he feeds, you know he has latched on. Getting your baby to latch on well will prevent your nipples from getting sore.</p>\n',
        'pivot': {
          'topic_id': 903,
          'question_id': 2018,
          'featured': 1,
          'order': 0
        },
        'account': {
          'id': 3088,
          'organization': 'MomConnect',
          'domain': 'momconnect.besnappy.com',
          'plan_id': 5,
          'active': 1,
          'created_at': '2014-06-30 15:22:31',
          'updated_at': '2016-02-03 01:23:12',
          'custom_domain': null,
          'trial_ends_at': '2014-07-21 15:22:31',
          'cancel_message': null,
          'forward_shown': 1,
          'badge_url': '',
          'last_paid_at': '2016-02-03 01:23:12',
          'invoiced': null,
          'cancelled_at': null,
          'is_paid': true,
          'is_trial': false
        }
      },
      {
        'id': 2021,
        'account_id': 3088,
        'question': 'Putting baby to sleep',
        'answer': 'Newborn babies sleep a lot. You can expect him to sleep for up to 18 hours a day for the first few weeks. But he won\'t sleep for more than 3-4 hours at a time. Put your baby to sleep on his back on a firm surface. Don\'t use pillows. They could suffocate him. Try to get some rest whenever your baby sleeps.',
        'created_at': '2014-08-13 21:47:38',
        'updated_at': '2014-08-13 21:47:38',
        'active': 1,
        'parsed_answer': '<p>Newborn babies sleep a lot. You can expect him to sleep for up to 18 hours a day for the first few weeks. But he won\'t sleep for more than 3-4 hours at a time. Put your baby to sleep on his back on a firm surface. Don\'t use pillows. They could suffocate him. Try to get some rest whenever your baby sleeps.</p>\n',
        'pivot': {
          'topic_id': 903,
          'question_id': 2021,
          'featured': 0,
          'order': 0
        },
        'account': {
          'id': 3088,
          'organization': 'MomConnect',
          'domain': 'momconnect.besnappy.com',
          'plan_id': 5,
          'active': 1,
          'created_at': '2014-06-30 15:22:31',
          'updated_at': '2016-02-03 01:23:12',
          'custom_domain': null,
          'trial_ends_at': '2014-07-21 15:22:31',
          'cancel_message': null,
          'forward_shown': 1,
          'badge_url': '',
          'last_paid_at': '2016-02-03 01:23:12',
          'invoiced': null,
          'cancelled_at': null,
          'is_paid': true,
          'is_trial': false
        }
      },
      {
        'id': 1985,
        'account_id': 3088,
        'question': 'Registering the birth',
        'answer': 'You have to register your baby before he is 30 days old. Do this at Home Affairs. It is free. But you will need to take your ID and his hospital certificate or clinic card. Department of Home Affairs ID documents and baby registration 0800 601 190 (Toll free when calling from a landline; normal cell phone rates apply)',
        'created_at': '2014-08-13 18:23:14',
        'updated_at': '2014-08-13 18:23:14',
        'active': 1,
        'parsed_answer': '<p>You have to register your baby before he is 30 days old. Do this at Home Affairs. It is free. But you will need to take your ID and his hospital certificate or clinic card. Department of Home Affairs ID documents and baby registration 0800 601 190 (Toll free when calling from a landline; normal cell phone rates apply)</p>\n',
        'pivot': {
          'topic_id': 903,
          'question_id': 1985,
          'featured': 0,
          'order': 0
        },
        'account': {
          'id': 3088,
          'organization': 'MomConnect',
          'domain': 'momconnect.besnappy.com',
          'plan_id': 5,
          'active': 1,
          'created_at': '2014-06-30 15:22:31',
          'updated_at': '2016-02-03 01:23:12',
          'custom_domain': null,
          'trial_ends_at': '2014-07-21 15:22:31',
          'cancel_message': null,
          'forward_shown': 1,
          'badge_url': '',
          'last_paid_at': '2016-02-03 01:23:12',
          'invoiced': null,
          'cancelled_at': null,
          'is_paid': true,
          'is_trial': false
        }
      },
      {
        'id': 2044,
        'account_id': 3088,
        'question': 'Traditional remedies',
        'answer': 'Do your family and friends recommend traditional remedies and medicines for your baby? Check with your health worker first, before giving your baby any home or herbal remedies. They may be unsafe.',
        'created_at': '2014-08-13 22:20:53',
        'updated_at': '2014-08-13 22:20:53',
        'active': 1,
        'parsed_answer': '<p>Do your family and friends recommend traditional remedies and medicines for your baby? Check with your health worker first, before giving your baby any home or herbal remedies. They may be unsafe.</p>\n',
        'pivot': {
          'topic_id': 903,
          'question_id': 2044,
          'featured': 0,
          'order': 0
        },
        'account': {
          'id': 3088,
          'organization': 'MomConnect',
          'domain': 'momconnect.besnappy.com',
          'plan_id': 5,
          'active': 1,
          'created_at': '2014-06-30 15:22:31',
          'updated_at': '2016-02-03 01:23:12',
          'custom_domain': null,
          'trial_ends_at': '2014-07-21 15:22:31',
          'cancel_message': null,
          'forward_shown': 1,
          'badge_url': '',
          'last_paid_at': '2016-02-03 01:23:12',
          'invoiced': null,
          'cancelled_at': null,
          'is_paid': true,
          'is_trial': false
        }
      },
      {
        'id': 2020,
        'account_id': 3088,
        'question': 'Vaccinations',
        'answer': 'Vaccinations will help to prevent your baby from catching serious diseases such as TB and polio. Each vaccine needs to be given at the right time. Your baby should be vaccinated at 6, 10 and 14 weeks. This will help to keep her protected from disease. Please go to the clinic to find out more.',
        'created_at': '2014-08-13 21:47:05',
        'updated_at': '2014-08-13 21:47:05',
        'active': 1,
        'parsed_answer': '<p>Vaccinations will help to prevent your baby from catching serious diseases such as TB and polio. Each vaccine needs to be given at the right time. Your baby should be vaccinated at 6, 10 and 14 weeks. This will help to keep her protected from disease. Please go to the clinic to find out more.</p>\n',
        'pivot': {
          'topic_id': 903,
          'question_id': 2020,
          'featured': 0,
          'order': 0
        },
        'account': {
          'id': 3088,
          'organization': 'MomConnect',
          'domain': 'momconnect.besnappy.com',
          'plan_id': 5,
          'active': 1,
          'created_at': '2014-06-30 15:22:31',
          'updated_at': '2016-02-03 01:23:12',
          'custom_domain': null,
          'trial_ends_at': '2014-07-21 15:22:31',
          'cancel_message': null,
          'forward_shown': 1,
          'badge_url': '',
          'last_paid_at': '2016-02-03 01:23:12',
          'invoiced': null,
          'cancelled_at': null,
          'is_paid': true,
          'is_trial': false
        }
      },
      {
        'id': 2043,
        'account_id': 3088,
        'question': 'Vitamins',
        'answer': 'For the first 6 months, your baby will get all the vitamins he needs from your breast milk. He then needs additional Vitamin A from 9 months of age, and then every 6 months, until he is 5 years old. You can get the Vitamin A from your clinic.',
        'created_at': '2014-08-13 22:20:30',
        'updated_at': '2014-08-13 22:20:30',
        'active': 1,
        'parsed_answer': '<p>For the first 6 months, your baby will get all the vitamins he needs from your breast milk. He then needs additional Vitamin A from 9 months of age, and then every 6 months, until he is 5 years old. You can get the Vitamin A from your clinic.</p>\n',
        'pivot': {
          'topic_id': 903,
          'question_id': 2043,
          'featured': 0,
          'order': 0
        },
        'account': {
          'id': 3088,
          'organization': 'MomConnect',
          'domain': 'momconnect.besnappy.com',
          'plan_id': 5,
          'active': 1,
          'created_at': '2014-06-30 15:22:31',
          'updated_at': '2016-02-03 01:23:12',
          'custom_domain': null,
          'trial_ends_at': '2014-07-21 15:22:31',
          'cancel_message': null,
          'forward_shown': 1,
          'badge_url': '',
          'last_paid_at': '2016-02-03 01:23:12',
          'invoiced': null,
          'cancelled_at': null,
          'is_paid': true,
          'is_trial': false
        }
      },
      {
        'id': 2041,
        'account_id': 3088,
        'question': 'What if my baby is sick?',
        'answer': 'If your baby has a high temperature, or if he vomits, take him to the clinic. He will get the right treatment at the clinic. Only give medicine that your health worker recommends. After he recovers, give him and extra feed or meal every day for a week.',
        'created_at': '2014-08-13 22:19:02',
        'updated_at': '2014-08-13 22:19:02',
        'active': 1,
        'parsed_answer': '<p>If your baby has a high temperature, or if he vomits, take him to the clinic. He will get the right treatment at the clinic. Only give medicine that your health worker recommends. After he recovers, give him and extra feed or meal every day for a week.</p>\n',
        'pivot': {
          'topic_id': 903,
          'question_id': 2041,
          'featured': 0,
          'order': 0
        },
        'account': {
          'id': 3088,
          'organization': 'MomConnect',
          'domain': 'momconnect.besnappy.com',
          'plan_id': 5,
          'active': 1,
          'created_at': '2014-06-30 15:22:31',
          'updated_at': '2016-02-03 01:23:12',
          'custom_domain': null,
          'trial_ends_at': '2014-07-21 15:22:31',
          'cancel_message': null,
          'forward_shown': 1,
          'badge_url': '',
          'last_paid_at': '2016-02-03 01:23:12',
          'invoiced': null,
          'cancelled_at': null,
          'is_paid': true,
          'is_trial': false
        }
      },
      {
        'id': 1986,
        'account_id': 3088,
        'question': 'What is exclusive breastfeeding?',
        'answer': 'Your baby needs ONLY breast milk for the first 6 months. Don\'t give him water, porridge, formula milk, tea or anything else. Your body can make plenty of milk for your baby. It protects him from disease. If you are HIV-positive make sure you are taking your ARVs while you are breastfeeding. This will help to stop him becoming HIV-positive when he drinks your breast milk.',
        'created_at': '2014-08-13 18:23:45',
        'updated_at': '2014-08-13 18:23:45',
        'active': 1,
        'parsed_answer': '<p>Your baby needs ONLY breast milk for the first 6 months. Don\'t give him water, porridge, formula milk, tea or anything else. Your body can make plenty of milk for your baby. It protects him from disease. If you are HIV-positive make sure you are taking your ARVs while you are breastfeeding. This will help to stop him becoming HIV-positive when he drinks your breast milk.</p>\n',
        'pivot': {
          'topic_id': 903,
          'question_id': 1986,
          'featured': 0,
          'order': 0
        },
        'account': {
          'id': 3088,
          'organization': 'MomConnect',
          'domain': 'momconnect.besnappy.com',
          'plan_id': 5,
          'active': 1,
          'created_at': '2014-06-30 15:22:31',
          'updated_at': '2016-02-03 01:23:12',
          'custom_domain': null,
          'trial_ends_at': '2014-07-21 15:22:31',
          'cancel_message': null,
          'forward_shown': 1,
          'badge_url': '',
          'last_paid_at': '2016-02-03 01:23:12',
          'invoiced': null,
          'cancelled_at': null,
          'is_paid': true,
          'is_trial': false
        }
      }
    ],
    881: [
      {
        'id': 2139,
        'account_id': 3088,
        'question': 'Cancer in pregnancy',
        'answer': 'Cancer in pregnancy is not common but you need regular check-ups at the clinic. They must look for lumps in your breasts for breast cancer. A regular, scheduled pap smear will check for cervical cancer.',
        'created_at': '2014-08-25 08:58:13',
        'updated_at': '2014-08-25 08:58:13',
        'active': 1,
        'parsed_answer': '<p>Cancer in pregnancy is not common but you need regular check-ups at the clinic. They must look for lumps in your breasts for breast cancer. A regular, scheduled pap smear will check for cervical cancer.</p>\n',
        'pivot': {
          'topic_id': 881,
          'question_id': 2139,
          'featured': 0,
          'order': 0
        }
      },
      {
        'id': 1891,
        'account_id': 3088,
        'question': 'Clinic visits',
        'answer': 'You need to visit the clinic at least 4 times during your pregnancy. Make your first appointment as soon as you have missed a period or as soon you think you may be pregnant. The nurses will check your health, and your baby\@@s. If they pick up any problems they can treat you and your baby fast. It will mean fewer problems later on if you get the right care straight away.',
        'created_at': '2014-07-15 09:54:12',
        'updated_at': '2014-08-11 16:28:27',
        'active': 1,
        'parsed_answer': '<p>You need to visit the clinic at least 4 times during your pregnancy. Make your first appointment as soon as you have missed a period or as soon you think you may be pregnant. The nurses will check your health, and your baby\@@s. If they pick up any problems they can treat you and your baby fast. It will mean fewer problems later on if you get the right care straight away.</p>\n',
        'pivot': {
          'topic_id': 881,
          'question_id': 1891,
          'featured': 0,
          'order': 0
        }
      },
      {
        'id': 1938,
        'account_id': 3088,
        'question': 'Common symptoms',
        'answer': 'Pregnancy is a natural time for your body. Your body is going through a lot of changes. Most pregnancy symptoms are quite normal. Some of the most common complaints during pregnancy include:\nMorning sickness (nausea), feeling tired, pelvic ache and back ache, constipation, swelling legs and feet, difficulty sleeping in late pregnancy. You may also feel angry, emotional or tearful. Check at the clinic if you are worried.',
        'created_at': '2014-07-29 10:39:01',
        'updated_at': '2014-08-11 16:23:20',
        'active': 1,
        'parsed_answer': '<p>Pregnancy is a natural time for your body. Your body is going through a lot of changes. Most pregnancy symptoms are quite normal. Some of the most common complaints during pregnancy include:\nMorning sickness (nausea), feeling tired, pelvic ache and back ache, constipation, swelling legs and feet, difficulty sleeping in late pregnancy. You may also feel angry, emotional or tearful. Check at the clinic if you are worried.</p>\n',
        'pivot': {
          'topic_id': 881,
          'question_id': 1938,
          'featured': 0,
          'order': 0
        }
      },
      {
        'id': 2140,
        'account_id': 3088,
        'question': 'Constipation',
        'answer': 'Constipation is a common problem during pregnancy. Make sure you drink lots of water and eat lots of fruit and vegetables. Moderate exercise, such as walking, can also help to ease constipation',
        'created_at': '2014-08-25 08:59:22',
        'updated_at': '2014-08-25 08:59:22',
        'active': 1,
        'parsed_answer': '<p>Constipation is a common problem during pregnancy. Make sure you drink lots of water and eat lots of fruit and vegetables. Moderate exercise, such as walking, can also help to ease constipation</p>\n',
        'pivot': {
          'topic_id': 881,
          'question_id': 2140,
          'featured': 0,
          'order': 0
        }
      },
      {
        'id': 1991,
        'account_id': 3088,
        'question': 'Feeling sick',
        'answer': 'Fever, coughing and breathlessness are signs of illness. Always go to the clinic if you have these signs so you can get the right medicines for you and your baby.',
        'created_at': '2014-08-13 21:05:14',
        'updated_at': '2014-08-13 21:05:14',
        'active': 1,
        'parsed_answer': '<p>Fever, coughing and breathlessness are signs of illness. Always go to the clinic if you have these signs so you can get the right medicines for you and your baby.</p>\n',
        'pivot': {
          'topic_id': 881,
          'question_id': 1991,
          'featured': 0,
          'order': 0
        }
      },
      {
        'id': 1995,
        'account_id': 3088,
        'question': 'Feeling tired',
        'answer': 'It\@@s normal to feel exhausted or very tired, especially in the first few months of pregnancy. Growing a baby is hard work, even though your baby is tiny. Get as much rest as you can. If that does not help, ask for iron supplements at the clinic, or buy some at your pharmacy if you can. Your energy should improve from about month 4. Ask your family to help with household tasks such as shopping, cooking and cleaning',
        'created_at': '2014-08-13 21:25:25',
        'updated_at': '2014-08-13 21:25:25',
        'active': 1,
        'parsed_answer': '<p>It\@@s normal to feel exhausted or very tired, especially in the first few months of pregnancy. Growing a baby is hard work, even though your baby is tiny. Get as much rest as you can. If that does not help, ask for iron supplements at the clinic, or buy some at your pharmacy if you can. Your energy should improve from about month 4. Ask your family to help with household tasks such as shopping, cooking and cleaning</p>\n',
        'pivot': {
          'topic_id': 881,
          'question_id': 1995,
          'featured': 0,
          'order': 0
        }
      },
      {
        'id': 1989,
        'account_id': 3088,
        'question': 'Feeling your baby move',
        'answer': 'You may start to feel your baby moving in months 4 and 5. By month 9 your baby is running out of space and will move less. If you don\@@t feel your baby moving for a few hours see if you can wake him up by drinking something sweet, or by listening to some music. If you are worried visit your clinic.',
        'created_at': '2014-08-13 20:31:20',
        'updated_at': '2014-08-13 20:31:20',
        'active': 1,
        'parsed_answer': '<p>You may start to feel your baby moving in months 4 and 5. By month 9 your baby is running out of space and will move less. If you don\@@t feel your baby moving for a few hours see if you can wake him up by drinking something sweet, or by listening to some music. If you are worried visit your clinic.</p>\n',
        'pivot': {
          'topic_id': 881,
          'question_id': 1989,
          'featured': 0,
          'order': 0
        }
      },
      {
        'id': 2138,
        'account_id': 3088,
        'question': 'Food to avoid',
        'answer': 'The food you like while you are pregnant may not be what you usually eat. Avoid using too much sugar or fried or fatty food. Do not drink any alcohol. Avoid raw eggs. Try not to take any herbal or traditional medicines before first checking with the clinic to see if they are safe for you and your baby.',
        'created_at': '2014-08-25 08:57:31',
        'updated_at': '2014-08-25 08:57:31',
        'active': 1,
        'parsed_answer': '<p>The food you like while you are pregnant may not be what you usually eat. Avoid using too much sugar or fried or fatty food. Do not drink any alcohol. Avoid raw eggs. Try not to take any herbal or traditional medicines before first checking with the clinic to see if they are safe for you and your baby.</p>\n',
        'pivot': {
          'topic_id': 881,
          'question_id': 2138,
          'featured': 0,
          'order': 0
        }
      },
      {
        'id': 2068,
        'account_id': 3088,
        'question': 'How to prevent infections',
        'answer': 'Don\@@t go into crowded areas and places where people are coughing and sneezing. You don\@@t want to expose yourself to TB. Also, even though you are pregnant, you still need to use condoms to protect yourself against sexually transmitted infections (STIs) and HIV.',
        'created_at': '2014-08-14 12:51:12',
        'updated_at': '2014-08-14 12:51:12',
        'active': 1,
        'parsed_answer': '<p>Don\@@t go into crowded areas and places where people are coughing and sneezing. You don\@@t want to expose yourself to TB. Also, even though you are pregnant, you still need to use condoms to protect yourself against sexually transmitted infections (STIs) and HIV.</p>\n',
        'pivot': {
          'topic_id': 881,
          'question_id': 2068,
          'featured': 0,
          'order': 0
        }
      },
      {
        'id': 1939,
        'account_id': 3088,
        'question': 'Pregnancy warning signs',
        'answer': 'Go to the clinic straight away if you have: pain in your stomach, swelling of your legs or feet that does not go down overnight, a fever, pain when you are urinating, if your baby stops moving after five months, a headache and you can\@@t see properly (blurred vision), vomiting and a sudden swelling of your face, hands or feet, fluid leaking from your vagina.',
        'created_at': '2014-07-29 10:39:25',
        'updated_at': '2014-08-11 16:25:50',
        'active': 1,
        'parsed_answer': '<p>Go to the clinic straight away if you have: pain in your stomach, swelling of your legs or feet that does not go down overnight, a fever, pain when you are urinating, if your baby stops moving after five months, a headache and you can\@@t see properly (blurred vision), vomiting and a sudden swelling of your face, hands or feet, fluid leaking from your vagina.</p>\n',
        'pivot': {
          'topic_id': 881,
          'question_id': 1939,
          'featured': 0,
          'order': 0
        }
      },
      {
        'id': 1943,
        'account_id': 3088,
        'question': 'Preventing infection',
        'answer': 'The easiest way to prevent infections is to use soap and water and to wash your hands often. Make sure you do this after you use the toilet and before you eat. Please take extra care to eat well and try to stay away from crowded areas and people who are coughing and sneezing.',
        'created_at': '2014-07-29 10:40:15',
        'updated_at': '2014-08-12 13:34:27',
        'active': 1,
        'parsed_answer': '<p>The easiest way to prevent infections is to use soap and water and to wash your hands often. Make sure you do this after you use the toilet and before you eat. Please take extra care to eat well and try to stay away from crowded areas and people who are coughing and sneezing.</p>\n',
        'pivot': {
          'topic_id': 881,
          'question_id': 1943,
          'featured': 0,
          'order': 0
        }
      },
      {
        'id': 1942,
        'account_id': 3088,
        'question': 'Supplements',
        'answer': 'Your clinic will give you iron and folic acid tablets to take daily. Folic acid is important in early pregnancy. It helps your baby\@@s spine to develop correctly. Take the pills as soon as you know you are pregnant - ideally before. You can also get folic acid from eating dark green vegetables (like spinach), and also eggs and oranges. You may also be given calcium pills. They help to keep your blood pressure stable. High blood pressure is not good for your baby, or you.',
        'created_at': '2014-07-29 10:40:04',
        'updated_at': '2014-08-12 13:20:18',
        'active': 1,
        'parsed_answer': '<p>Your clinic will give you iron and folic acid tablets to take daily. Folic acid is important in early pregnancy. It helps your baby\@@s spine to develop correctly. Take the pills as soon as you know you are pregnant - ideally before. You can also get folic acid from eating dark green vegetables (like spinach), and also eggs and oranges. You may also be given calcium pills. They help to keep your blood pressure stable. High blood pressure is not good for your baby, or you.</p>\n',
        'pivot': {
          'topic_id': 881,
          'question_id': 1942,
          'featured': 0,
          'order': 0
        }
      },
      {
        'id': 1941,
        'account_id': 3088,
        'question': 'Swollen feet',
        'answer': 'It is common to have swollen feet and ankles, particularly during the last months of pregnancy. Your hands may swell too. Your body is holding lots of extra water. Lie down and raise your legs when possible. The swelling should go down overnight. If it does not, tell your clinic and get it checked. It could mean you have high blood pressure. High blood pressure is not good for your baby either.',
        'created_at': '2014-07-29 10:39:51',
        'updated_at': '2014-08-12 13:19:21',
        'active': 1,
        'parsed_answer': '<p>It is common to have swollen feet and ankles, particularly during the last months of pregnancy. Your hands may swell too. Your body is holding lots of extra water. Lie down and raise your legs when possible. The swelling should go down overnight. If it does not, tell your clinic and get it checked. It could mean you have high blood pressure. High blood pressure is not good for your baby either.</p>\n',
        'pivot': {
          'topic_id': 881,
          'question_id': 1941,
          'featured': 0,
          'order': 0
        }
      },
      {
        'id': 1990,
        'account_id': 3088,
        'question': 'TB and pregnancy',
        'answer': 'When you are pregnant you can catch TB more easily. It\@@s also easier to catch it if you are HIV-positive. So take extra care. Eat well and stay away from crowded areas and from people who are coughing and sneezing. If you are being treated for TB, make sure you take the whole course of medicines even if you feel fine. Stopping your medication can make TB come back.',
        'created_at': '2014-08-13 20:32:03',
        'updated_at': '2014-08-13 20:32:03',
        'active': 1,
        'parsed_answer': '<p>When you are pregnant you can catch TB more easily. It\@@s also easier to catch it if you are HIV-positive. So take extra care. Eat well and stay away from crowded areas and from people who are coughing and sneezing. If you are being treated for TB, make sure you take the whole course of medicines even if you feel fine. Stopping your medication can make TB come back.</p>\n',
        'pivot': {
          'topic_id': 881,
          'question_id': 1990,
          'featured': 0,
          'order': 0
        }
      },
      {
        'id': 1940,
        'account_id': 3088,
        'question': 'Tests during pregnancy',
        'answer': 'At the clinic the health worker will weigh you, check your blood pressure and test your urine. Regular blood tests give your doctor important information about your health. The tests may show the potential for problems in your pregnancy. Blood pressure checks at the clinic are an important part of your pregnancy care. If you have high blood pressure, you might need medicine to control it.',
        'created_at': '2014-07-29 10:39:40',
        'updated_at': '2014-08-12 13:18:18',
        'active': 1,
        'parsed_answer': '<p>At the clinic the health worker will weigh you, check your blood pressure and test your urine. Regular blood tests give your doctor important information about your health. The tests may show the potential for problems in your pregnancy. Blood pressure checks at the clinic are an important part of your pregnancy care. If you have high blood pressure, you might need medicine to control it.</p>\n',
        'pivot': {
          'topic_id': 881,
          'question_id': 1940,
          'featured': 0,
          'order': 0
        }
      },
      {
        'id': 1996,
        'account_id': 3088,
        'question': 'Traditional remedies',
        'answer': 'Traditional remedies may not be safe for you or your baby. Before taking any traditional medicine, please check first with your health worker or the clinic.',
        'created_at': '2014-08-13 21:26:57',
        'updated_at': '2014-08-13 21:26:57',
        'active': 1,
        'parsed_answer': '<p>Traditional remedies may not be safe for you or your baby. Before taking any traditional medicine, please check first with your health worker or the clinic.</p>\n',
        'pivot': {
          'topic_id': 881,
          'question_id': 1996,
          'featured': 0,
          'order': 0
        }
      },
      {
        'id': 1993,
        'account_id': 3088,
        'question': 'Vaginal discharge',
        'answer': 'Vaginal discharge, including light spotting or light bleeding, can be common in pregnancy. But if you are experiencing heavy bleeding, cramps or pain, then go straight to the clinic to have them checked.',
        'created_at': '2014-08-13 21:22:52',
        'updated_at': '2014-08-13 21:22:52',
        'active': 1,
        'parsed_answer': '<p>Vaginal discharge, including light spotting or light bleeding, can be common in pregnancy. But if you are experiencing heavy bleeding, cramps or pain, then go straight to the clinic to have them checked.</p>\n',
        'pivot': {
          'topic_id': 881,
          'question_id': 1993,
          'featured': 0,
          'order': 0
        }
      },
      {
        'id': 1988,
        'account_id': 3088,
        'question': 'Violent or abusive partner',
        'answer': 'It is NOT OK if your partner or anyone hits you or shouts at you. You have the right to seek help. Talk to a friend or a health worker for advice. You need to put your health and the health of your baby first. Call 0800 150 150. It\@@s a 24-hour Stop Gender Violence helpline and it\@@s free to call this number from a landline. (Normal cell phone rates apply)',
        'created_at': '2014-08-13 20:30:34',
        'updated_at': '2014-08-13 20:30:34',
        'active': 1,
        'parsed_answer': '<p>It is NOT OK if your partner or anyone hits you or shouts at you. You have the right to seek help. Talk to a friend or a health worker for advice. You need to put your health and the health of your baby first. Call 0800 150 150. It\@@s a 24-hour Stop Gender Violence helpline and it\@@s free to call this number from a landline. (Normal cell phone rates apply)</p>\n',
        'pivot': {
          'topic_id': 881,
          'question_id': 1988,
          'featured': 0,
          'order': 0
        }
      },
      {
        'id': 1992,
        'account_id': 3088,
        'question': 'What to avoid during pregnancy',
        'answer': 'Smoking, illegal drugs and alcohol are dangerous for you and your baby. Now is a good time to give up these habits. Ask for help at the clinic.',
        'created_at': '2014-08-13 21:07:57',
        'updated_at': '2014-08-13 21:07:57',
        'active': 1,
        'parsed_answer': '<p>Smoking, illegal drugs and alcohol are dangerous for you and your baby. Now is a good time to give up these habits. Ask for help at the clinic.</p>\n',
        'pivot': {
          'topic_id': 881,
          'question_id': 1992,
          'featured': 0,
          'order': 0
        }
      }
    ]
  },
  results: []
}

// ------------------------------------
// Constants
// ------------------------------------
export const SEARCHFAQ = 'SEARCHFAQ'

// ------------------------------------
// Actions
// ------------------------------------
export const searchFaq = createAction(SEARCHFAQ)

export const actions = {
  searchFaq
}

// ------------------------------------
// Reducer
// ------------------------------------

export default handleActions({
  SEARCHFAQ: (state, { payload }) => (Object.assign({}, state, {
    results: state.questions[payload.faqId].filter(x => x.question !== payload.term)
  }))
}, initialState)
