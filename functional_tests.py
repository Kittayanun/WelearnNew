#First thing he saw is title. the title name is "Welearn".
#
#
#
#
#
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import unittest
import time
class NewVisitorTest(unittest.TestCase):

  def setUp(self):
    self.browser = webdriver.Firefox()

  def tearDown(self):
    time.sleep(10)
    self.browser.quit()
  
  #def checheck_for_row_in_list_table
  # Nut has heard about web application 'Welearn'.
  # He goes to check out its homepage
  # nut saw the title name 'Welearn'
  def test_can_start_a_list_and_retrieve_it_later(self):
    self.browser.get('http://localhost:3000')
    self.assertIn('HomePage', self.browser.title)


    check_button_home_tutor = self.browser.find_element_by_name('tutor_button')
    self.assertEqual(check_button_home_tutor.get_attribute('value'), 'Tutor')
    
    check_button_home_exam = self.browser.find_element_by_name('Examination_button')
    self.assertEqual(check_button_home_exam.get_attribute('value'), 'Examination')

    time.sleep(2)
    check_button_home_tutor.click()


    # นัทเห็นปุ่มกดตั้งกระทู้
    check_button_tutor = self.browser.find_element_by_name('post_button')
    self.assertEqual(check_button_tutor.get_attribute('value'), 'Create Post')

    

    # นัทกดที่ปุ่ม “Create Post” จากนั้นจะเปลี่ยนหน้าเพจไปที่หน้าโพสกระทู้
    check_button_tutor.click()
    check_url_tutor = self.browser.current_url
    self.assertRegex(check_url_tutor, 'http://localhost:3000/tutor/createPost')
    time.sleep(2)
   

    
    
    # id_new_post_tutor is variable in tutorpost.html
    input_topic = self.browser.find_element_by_name('title_text')
    self.assertEqual(input_topic.get_attribute('placeholder'),'Enter your topic')
    input_topic.send_keys('I want someone to be my tutor in Math')
   
    input_detail = self.browser.find_element_by_name('detail_text')
    self.assertEqual(input_detail.get_attribute('placeholder'),'Enter your detail')
    input_detail.send_keys('I really want. Help')
    time.sleep(2)
    
    submit_button = self.browser.find_element_by_name('submit_text')
    submit_button.click()
    time.sleep(2)

    check_url_tutor = self.browser.current_url
    self.assertRegex(check_url_tutor, 'http://localhost:3000/topic')
    time.sleep(2)
     
    self.fail('Finish the test!')

if __name__ == '__main__':
   unittest.main(warnings='ignore')
